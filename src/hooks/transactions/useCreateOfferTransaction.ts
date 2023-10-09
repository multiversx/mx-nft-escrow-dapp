import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks/account/useGetAccountInfo";
import {getChainID} from "@multiversx/sdk-dapp/utils";
import {Address, TokenTransfer} from "@multiversx/sdk-core";
import {smartContract} from "utils/smartContract";

export const useCreateOfferTransaction = () => {
    const {account} = useGetAccountInfo();

    const getCreateOfferTransaction = ({
        collectionId,
        nonce,
        wantedCollectionId,
        wantedNonce,
        wantedAddress
    }: {collectionId: string, nonce: number, wantedCollectionId: string, wantedNonce: number, wantedAddress: string}) => {
        return smartContract.methods
            .escrow([wantedCollectionId, wantedNonce, wantedAddress])
            .withSingleESDTNFTTransfer(
                TokenTransfer.nonFungible(collectionId, nonce)
            )
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getCreateOfferTransaction
    }
}