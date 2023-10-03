import {getChainID} from "@multiversx/sdk-dapp/utils";
import {smartContract} from "utils/smartContract.ts";

export const useConfirmTransaction = () => {

    const getCancelTransaction = ({
        offerId
    }: {offerId: number}) => {
        return smartContract.methods
            .cancel([offerId])
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getCancelTransaction
    }
}