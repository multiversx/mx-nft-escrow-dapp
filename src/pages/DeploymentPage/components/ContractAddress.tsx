import {useGetDeployedContractAddress} from "../hooks/useGetDeployedContractAddress.ts";

export const ContractAddress = ({sessionId}: {sessionId: string}) => {
    const {contractAddress} = useGetDeployedContractAddress(sessionId)

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