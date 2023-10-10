import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress";
import {Trim} from "@multiversx/sdk-dapp/UI";

export const ContractOrDeployerAddress = ({sessionId, label}: {sessionId: string, label: string}) => {
    const {contractOrDeployerAddress} = useGetDeployedContractAddress(sessionId)

    return (
        <div className="w-full flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-4">
            <span className="text-left"><b>{label}</b>:</span>
            <span><Trim text={contractOrDeployerAddress ?? '-'}/></span>
        </div>
    )
}