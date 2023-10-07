import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";
import {useEffect} from "react";

export const ContractOrDeployerAddress = ({sessionId}: {sessionId: string}) => {
    const {contractOrDeployerAddress} = useGetDeployedContractAddress(sessionId)

    useEffect(() => {
        console.log('contractOrDeployerAddress', contractOrDeployerAddress);
    }, [contractOrDeployerAddress])

    return (
        <div style={{display: "flex", marginTop: "5rem"}}>
            <span><b>Contract Or Deployer Address: </b></span>
            <span>{contractOrDeployerAddress ?? '-'}</span>
        </div>
    )
}