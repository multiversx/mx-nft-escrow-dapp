import {useCallback, useEffect, useState} from "react";
import BigNumber from "bignumber.js";
import {ProxyNetworkProvider} from "@multiversx/sdk-network-providers";
import {ResultsParser} from "@multiversx/sdk-core";
import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks/account/useGetAccountInfo";
import {OfferResponseType} from "types/offerResponse";
import {OfferType} from "types/offer";
import {smartContract} from "utils/smartContract";
import {API_URL} from "config";

export const useWantedOffers = () => {
    const {account} = useGetAccountInfo();

    const [wantedOffers, setWantedOffers] = useState<OfferType[]>([]);

    const getWantedOffers = useCallback(async () => {
        const networkProvider = new ProxyNetworkProvider(API_URL);
        const interaction = smartContract.methods.getWantedOffers([account.address]);
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
                } as OfferType
            });

            setWantedOffers([...offers]);
        }

        console.log(offersPairs);
        return offersPairs;
    }, [account.address]);

    useEffect(() => {
        getWantedOffers();
    }, [account.address]);

   return {
       wantedOffers,
       getWantedOffers
   }
}