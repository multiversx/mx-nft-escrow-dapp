import {useState} from "react";
import useUploadWasmCode from "../hooks/useUploadWasmCode.tsx";
import {DeployOrUpgradeParamsType} from "../types/deployOrUpgradeParams.ts";

export const DeployContractForm = ({
    deployContractCallback,
    upgradeContractCallback
}:{
    deployContractCallback: (params: DeployOrUpgradeParamsType) => void;
    upgradeContractCallback: (params: DeployOrUpgradeParamsType) => void;
}) => {
    const [contractAddress, setContractAddress] = useState<string>();

    const { wasmCode, onUpload } = useUploadWasmCode();

    const handleSubmit = async (method: 'deploy' | 'upgrade') => {
        if (!wasmCode) {
            return;
        }

        const params: DeployOrUpgradeParamsType = {
            code: wasmCode,
            args: [],
            gasLimit: 60000000,
        }

        if (method == 'deploy') {
            deployContractCallback(params);
        } else {
            upgradeContractCallback({
                ...params,
                address: contractAddress,
            });
        }
    };

    return (
        <div>
            <h2>Deploy NFT Escrow Contract</h2>

            <div>
                <input type='file' name='file' onChange={onUpload} />

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
                    }}>{wasmCode?.toString()}</code>
                  </pre>
                </div>
            </div>
        </div>
    )
}