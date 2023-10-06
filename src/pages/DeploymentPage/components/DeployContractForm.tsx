import {useState} from "react";
import useWasmCode from "../hooks/useWasmCode";
import {DeployOrUpgradeParamsType} from "../types/deployOrUpgradeParams.ts";

export const DeployContractForm = ({deployContractCallback}:{deployContractCallback: (params: DeployOrUpgradeParamsType) => void}) => {
    const [contractAddress, setContractAddress] = useState<string>();

    const { code, onChange } = useWasmCode();

    const handleSubmit = async (method: 'deploy' | 'upgrade') => {
        if (!code) {
            return;
        }

        const scAddress = method == 'deploy' ? undefined : contractAddress;

        deployContractCallback({
            operation: method,
            address: scAddress,
            code,
            args: [],
            gasLimit: 60000000,
        });
    };

    return (
        <div className='row mt-5'>
            <div className='col-12'>
                <h2>Deploy NFT Escrow Contract</h2>

                <div className='card mb-2'>
                    <div className='card-body'>
                        <div className='form-group'>
                            <label>contract address (only for upgrade)</label>
                            <input
                                className='form-control'
                                type="text"
                                placeholder="contract address to upgrade"
                                onChange={(event) => setContractAddress(event.target.value)}
                                value={contractAddress ?? ''}
                            />
                        </div>


                        <input type='file' name='file' onChange={onChange} />

                        <div className='mt-3'>
                            <button
                                className='btn btn-primary mr-4'
                                onClick={() => handleSubmit('deploy')}
                            >
                                Deploy
                            </button>
                            <button
                                className='btn btn-primary'
                                onClick={() => handleSubmit('upgrade')}
                            >
                                Upgrade
                            </button>
                        </div>
                        <div>
                          <pre className='mt-2 pre-scrollable'>
                            <code style={{
                                display: "flow-root",
                                width: "250px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}>{code?.toString()}</code>
                          </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}