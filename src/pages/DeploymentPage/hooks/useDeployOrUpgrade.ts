import {
    Address,
    Code,
    CodeMetadata,
    SmartContract,
    TokenTransfer,
} from '@multiversx/sdk-core/out';
import {getChainID, refreshAccount} from "@multiversx/sdk-dapp/utils";
import {sendTransactions} from "@multiversx/sdk-dapp/services";
import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks";

export const useDeployOrUpgrade = () => {
    const {account} = useGetAccountInfo();

    const deployOrUpgrade = async (
        operation: 'deploy' | 'upgrade',
        address: string | undefined,
        code: Code,
        args: any[],
        gasLimit = 55000000,
        upgradeable?: boolean,
        readable?: boolean,
        payable?: boolean,
        payableBySc?: boolean
    )=> {
        try {
            const codeMetadata = new CodeMetadata(
                upgradeable ?? true,
                readable ?? true,
                payable ?? false,
                payableBySc ?? true
            );

            const smartContract = new SmartContract({
                address: address ? new Address(address) : undefined
            });

            const deployArguments = {
                code,
                gasLimit: gasLimit,
                codeMetadata,
                initArguments: args,
                value: TokenTransfer.egldFromAmount(0),
                chainID: getChainID(),
            };

            const transaction =
                operation === 'deploy'
                    ? smartContract.deploy({
                        ...deployArguments, deployer: Address.fromString(account.address)
                    })
                    : smartContract.upgrade({
                        ...deployArguments, caller: Address.fromString(account.address)
                    });

            await refreshAccount();
            const { sessionId, error } = await sendTransactions({
                transactions: transaction.toPlainObject(),
                transactionsDisplayInfo: {
                    processingMessage: `Processing ${operation}`,
                    errorMessage: `An error has occurred during ${operation}`,
                    successMessage: `${operation} successful`
                },
                redirectAfterSign: false,
                minGasLimit: '25000000'
            });

            return { success: error !== undefined, error: error ?? '', sessionId };
        } catch (error: any) {
            console.error(error);
            return { success: false, error: error.message, sessionId: null };
        }
    };

    return {
        deployOrUpgrade
    }
}