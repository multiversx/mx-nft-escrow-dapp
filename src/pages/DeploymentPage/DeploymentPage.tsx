import {ContractOrDeployerAddress} from "./components/ContractOrDeployerAddress";
import {useDeployOrUpgrade} from "./hooks/useDeployOrUpgrade";
import {DeployContractForm} from "./components/DeployContractForm";
import {DeployOrUpgradeParamsType} from "./types/deployOrUpgradeParams";
import {useState} from "react";

export const DeploymentPage = () => {
    // This is not persisted, then will be lost on page refresh, but feel free to persist it if you want
    const [sessionId, setSessionId] = useState<string>('');

    const {deployOrUpgrade} = useDeployOrUpgrade();

    const handleDeployOrUpgradeTransaction = async (
        {
            operation,
            address,
            code,
            args,
            gasLimit = 25000000
        }: DeployOrUpgradeParamsType
    ) => {
        const response = await deployOrUpgrade(
            operation,
            address === '' ? undefined : address,
            code,
            args,
            gasLimit
        );

        setSessionId(response.sessionId ?? '');
    };

    return (
        <div>
            <DeployContractForm deployContractCallback={handleDeployOrUpgradeTransaction} />
            <ContractOrDeployerAddress sessionId={sessionId} />
        </div>
    )
}