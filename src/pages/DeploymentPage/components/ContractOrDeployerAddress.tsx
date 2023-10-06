import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";
import {useEffect} from "react";

export const ContractOrDeployerAddress = ({sessionId}: {sessionId: string}) => {
    const {contractOrDeployerAddress} = useGetDeployedContractAddress(sessionId)

    useEffect(() => {
        console.log('contractOrDeployerAddress', contractOrDeployerAddress);
    }, [contractOrDeployerAddress])

    return (
        <div>
            <p><b>Contract Or Deployer Address: </b></p>
            <span>{contractOrDeployerAddress ?? '-'}</span>
        </div>
    )
}