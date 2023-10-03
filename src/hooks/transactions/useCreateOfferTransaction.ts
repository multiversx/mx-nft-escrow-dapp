import {getChainID} from "@multiversx/sdk-dapp/utils";
import {Address, TokenTransfer} from "@multiversx/sdk-core";
import {smartContract} from "utils/smartContract";

export const useCreateOfferTransaction = () => {

    const getCreateOfferTransaction = ({
        address,
        collectionId,
        nonce,
        wantedCollectionId,
        wantedNonce,
        wantedAddress
    }: {address: string; collectionId: string, nonce: number, wantedCollectionId: string, wantedNonce: number, wantedAddress: string}) => {
        return smartContract.methods
            .escrow([wantedCollectionId, wantedNonce, wantedAddress])
            .withSingleESDTNFTTransfer(
                TokenTransfer.nonFungible(collectionId, nonce)
            )
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(address))
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getCreateOfferTransaction
    }
}