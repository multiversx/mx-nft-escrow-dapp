import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";
import {useEffect} from "react";
import {Trim} from "@multiversx/sdk-dapp/UI";

export const ContractOrDeployerAddress = ({sessionId}: {sessionId: string}) => {
    const {contractOrDeployerAddress} = useGetDeployedContractAddress(sessionId)

    useEffect(() => {
        console.log('contractOrDeployerAddress', contractOrDeployerAddress);
    }, [contractOrDeployerAddress])

    return (
        <div className="w-full flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-4">
            <span className="text-left"><b>Contract Or Deployer Address: </b></span>
            <span><Trim text={contractOrDeployerAddress ?? '-'}/></span>
        </div>
    )
}