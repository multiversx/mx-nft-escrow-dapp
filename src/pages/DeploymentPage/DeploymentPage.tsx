import {ContractOrDeployerAddress} from "./components/ContractOrDeployerAddress";
import {useDeployments} from "./hooks/useDeployments";
import {DeployContractForm} from "./components/DeployContractForm";
import {DeployOrUpgradeParamsType} from "./types/deployOrUpgradeParams";
import {useState} from "react";

export const DeploymentPage = () => {
    // This is not persisted, then will be lost on page refresh, but feel free to persist it if you want
    const [sessionId, setSessionId] = useState<string>('');
    const [addressLabel, setAddressLabel] = useState<string>('Contract Address');

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
        <div className="h-screen">
            <DeployContractForm deployContractCallback={handleDeployTransaction} upgradeContractCallback={handleUpgradeTransaction} setAddressLabel={setAddressLabel} />
            <ContractOrDeployerAddress label={addressLabel} sessionId={sessionId} />
        </div>
    )
}