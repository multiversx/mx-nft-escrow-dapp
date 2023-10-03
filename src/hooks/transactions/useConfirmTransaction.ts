import {getChainID} from "@multiversx/sdk-dapp/utils";
import {TokenTransfer} from "@multiversx/sdk-core/out";
import {smartContract} from "utils/smartContract.ts";

export const useConfirmTransaction = () => {

    const getAcceptTransaction = ({
        offerId,
        collectionId,
        nonce
    }: {offerId: number, collectionId: string, nonce: number}) => {
        return smartContract.methods
            .accept([offerId])
            .withSingleESDTNFTTransfer(
                TokenTransfer.nonFungible(collectionId, nonce)
            )
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getAcceptTransaction
    }
}