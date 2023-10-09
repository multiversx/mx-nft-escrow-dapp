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
        <div className="w-full flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <h2 className="flex justify-center text-2xl">Deploy NFT Escrow Contract</h2>

            <div className="pt-32 px-16">
                <div>
                    <label className="text-left block mb-2 text-sm font-medium text-neutral-700" htmlFor="file_input">Upload .wasm file</label>
                    <input
                        onChange={onUpload}
                        className="block w-full text-sm border border-gray-300 cursor-pointer focus:outline-none" id="file_input" type="file" />
                </div>

                <div className="mt-8">
                    <label className="text-left block mb-2 text-sm font-medium text-neutral-700" htmlFor="file_input">Contract address (only for upgrade)</label>
                    <input
                        type="text"
                        placeholder="contract address to upgrade"
                        onChange={(event) => setContractAddress(event.target.value)}
                        value={contractAddress ?? ''}
                        className="block w-full text-sm border border-gray-300 cursor-pointer focus:outline-none p-1"
                    />
                </div>

                <div className="flex justify-center gap-3 my-8">
                    <button
                        onClick={() => handleSubmit('deploy')}
                        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Deploy
                    </button>
                    <button
                        onClick={() => handleSubmit('upgrade')}
                        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Upgrade
                    </button>
                </div>

                <textarea
                    rows={10}
                    className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder=".wasm code will be displayed here..."
                    value={wasmCode?.toString()}
                />
            </div>
        </div>
    )
}