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
        <div>
            <h2>Deploy NFT Escrow Contract</h2>

            <div>
                <input type='file' name='file' onChange={onChange} />

                <div style={{display: "flex", justifyContent: "start", flexDirection: "column"}}>
                    <label style={{display: "flex"}}>contract address (only for upgrade)</label>
                    <input
                        type="text"
                        placeholder="contract address to upgrade"
                        onChange={(event) => setContractAddress(event.target.value)}
                        value={contractAddress ?? ''}
                    />
                </div>

                <div style={{display: "flex", justifyContent: "center", gap: "3rem"}}>
                    <button
                        onClick={() => handleSubmit('deploy')}
                    >
                        Deploy
                    </button>
                    <button
                        onClick={() => handleSubmit('upgrade')}
                    >
                        Upgrade
                    </button>
                </div>
                <div>
                  <pre>
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
    )
}