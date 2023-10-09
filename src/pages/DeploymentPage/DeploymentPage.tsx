import {ContractOrDeployerAddress} from "./components/ContractOrDeployerAddress";
import {useDeployments} from "./hooks/useDeployments.ts";
import {DeployContractForm} from "./components/DeployContractForm";
import {DeployOrUpgradeParamsType} from "./types/deployOrUpgradeParams";
import {useState} from "react";

export const DeploymentPage = () => {
    // This is not persisted, then will be lost on page refresh, but feel free to persist it if you want
    const [sessionId, setSessionId] = useState<string>('');

    const {deploy, upgrade} = useDeployments();

    const handleDeployTransaction = async (
        params: DeployOrUpgradeParamsType
    ) => {
        const response = await deploy(params);
        setSessionId(response.sessionId ?? '');
    };

    const handleUpgradeTransaction = async (params: DeployOrUpgradeParamsType) => {
        const response = await upgrade(params);
        setSessionId(response.sessionId ?? '');
    };

    return (
        <div>
            <DeployContractForm deployContractCallback={handleDeployTransaction} upgradeContractCallback={handleUpgradeTransaction} />
            <ContractOrDeployerAddress sessionId={sessionId} />
        </div>
    )
}