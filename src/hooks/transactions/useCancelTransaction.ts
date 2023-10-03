import { useGetAccountInfo } from "@multiversx/sdk-dapp/hooks/account/useGetAccountInfo";
import {getChainID} from "@multiversx/sdk-dapp/utils";
import {smartContract} from "utils/smartContract";
import {Address} from "@multiversx/sdk-core";

export const useConfirmTransaction = () => {
    const {account} = useGetAccountInfo();

    const getCancelTransaction = ({
        offerId
    }: {offerId: number}) => {
        return smartContract.methods
            .cancel([offerId])
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getCancelTransaction
    }
}