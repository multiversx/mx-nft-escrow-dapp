import {useCallback, useEffect, useState} from "react";
import {ProxyNetworkProvider} from "@multiversx/sdk-network-providers";
import {Address, ResultsParser} from "@multiversx/sdk-core";
import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks";
import {smartContract} from "utils/smartContract.ts";
import BigNumber from "bignumber.js";
import {API_URL} from "config";

type OfferResponseType = {
    creator: Address;
    nft: string;
    nonce: BigNumber;
    wanted_address: Address;
    wanted_nft: string;
    wanted_nonce: BigNumber;
}

export type CreatedOfferType = {
    offerId: number;
    creator: string;
    nftCollection: string;
    nftNonce: number;
    wantedAddress: string;
    wantedNftCollection: string;
    wantedNftNonce: number;
}

export const useCreatedOffers = () => {
    const {account} = useGetAccountInfo();
    const [createdOffers, setCreatedOffers] = useState<CreatedOfferType[]>([]);

    const getCreatedOffers = useCallback(async () => {
        const networkProvider = new ProxyNetworkProvider(API_URL);
        const interaction = smartContract.methods.getCreatedOffers([account.address]);
        const query = interaction.buildQuery();

        const response = await networkProvider.queryContract(query);
        const { firstValue: offersPairs } = new ResultsParser().parseQueryResponse(response, interaction.getEndpoint());

        if(offersPairs) {
            const offers = offersPairs.valueOf().map((offerPair: [BigNumber, OfferResponseType]) => {
                return {
                    offerId: offerPair[0].toNumber(),
                    creator: offerPair[1].creator.valueOf().toString(),
                    nftCollection: offerPair[1].nft.valueOf(),
                    nftNonce: offerPair[1].nonce.toNumber(),
                    wantedAddress: offerPair[1].wanted_address.valueOf().toString(),
                    wantedNftCollection: offerPair[1].wanted_nft.valueOf(),
                    wantedNftNonce: offerPair[1].wanted_nonce.toNumber()
                } as CreatedOfferType
            });

            setCreatedOffers(offers);
        }

        console.log(offersPairs);
        return offersPairs;
    }, []);

    useEffect(() => {
        getCreatedOffers();
    }, [account.address]);

    return {
        createdOffers,
        getCreatedOffers
    }
}