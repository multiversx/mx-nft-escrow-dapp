import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";
import {useEffect} from "react";

export const ContractAddress = ({sessionId}: {sessionId: string}) => {
    const {contractAddress} = useGetDeployedContractAddress(sessionId)

    useEffect(() => {
        console.log('contractAddress', contractAddress);
    }, [contractAddress])

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <p className='m-0'>
                                <b>Contract Address: </b>
                                <span>{contractAddress ?? '-'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}