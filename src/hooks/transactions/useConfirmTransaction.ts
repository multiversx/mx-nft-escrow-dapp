import {getChainID} from "@multiversx/sdk-dapp/utils";
import {Address, TokenTransfer} from "@multiversx/sdk-core";
import {smartContract} from "utils/smartContract";
import { useGetAccountInfo } from "@multiversx/sdk-dapp/hooks/account/useGetAccountInfo";

export const useConfirmTransaction = () => {
    const {account} = useGetAccountInfo();
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
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getAcceptTransaction
    }
}