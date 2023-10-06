import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";
import {useEffect} from "react";

export const ContractOrDeployerAddress = ({sessionId}: {sessionId: string}) => {
    const {contractOrDeployerAddress} = useGetDeployedContractAddress(sessionId)

    useEffect(() => {
        console.log('contractOrDeployerAddress', contractOrDeployerAddress);
    }, [contractOrDeployerAddress])

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <p className='m-0'>
                                <b>Contract Or Deployer Address: </b>
                                <span>{contractOrDeployerAddress ?? '-'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}