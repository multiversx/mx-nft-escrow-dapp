import { useLocalStorage } from "hooks/useLocalStorage";
import {ContractAddress} from "./components/ContractAddress";
import {useDeployOrUpgrade} from "./hooks/useDeployOrUpgrade.ts";
import {DeployContractForm} from "./components/DeployContractForm.tsx";
import {DeployOrUpgradeParamsType} from "./types/deployOrUpgradeParams.ts";

export const DeploymentPage = () => {
    const [sessionId, setSessionId] = useLocalStorage<string | null>('sessionId', null);

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
            <ContractAddress sessionId={sessionId} />
        </div>
    )
}