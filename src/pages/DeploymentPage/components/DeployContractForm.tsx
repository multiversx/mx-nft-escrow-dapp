import {useState} from "react";
import useUploadWasmCode from "../hooks/useUploadWasmCode";
import {DeployOrUpgradeParamsType} from "../types/deployOrUpgradeParams";

export const DeployContractForm = ({
    deployContractCallback,
    upgradeContractCallback,
    setAddressLabel,
}:{
    deployContractCallback: (params: DeployOrUpgradeParamsType) => void;
    upgradeContractCallback: (params: DeployOrUpgradeParamsType) => void;
    setAddressLabel: (text: string) => void;
}) => {
    // There is no validation for the contract address format, except for the empty state, so feel free to add it
    const [contractAddress, setContractAddress] = useState<string>();
    const [enableUpgrade, setEnableUpgrade] = useState<boolean>(false);

    const { wasmCode, onUpload } = useUploadWasmCode();

    const handleDeploy = async () => {
        if (!wasmCode) {
            return;
        }

        const params: DeployOrUpgradeParamsType = {
            code: wasmCode,
            args: [],
            gasLimit: 60000000,
        }

        deployContractCallback(params);
    };

    const handleUpgrade = async () => {
        if (!wasmCode) {
            return;
        }

        const params: DeployOrUpgradeParamsType = {
            code: wasmCode,
            args: [],
            gasLimit: 60000000,
        }

        upgradeContractCallback({
            ...params,
            address: contractAddress,
        });
    };

    return (
        <div className="w-full flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <h2 className="flex justify-center text-2xl">Deploy NFT Escrow Contract</h2>

            <div className="pt-8 px-16">
                <div>
                    <label className="text-left block mb-2 text-sm font-medium text-neutral-700" htmlFor="file_input">Upload .wasm file</label>
                    <input
                        onChange={onUpload}
                        className="block w-full text-sm border border-gray-300 cursor-pointer focus:outline-none" id="file_input" type="file" />
                </div>

                <div className="flex items-center">
                    <input
                        checked={enableUpgrade} id="checked-checkbox" type="checkbox"
                        onChange={(event) => {
                            setEnableUpgrade(event.target.checked);
                            setAddressLabel(event.target.checked ? 'Deployer Address' : 'Contract Address');
                        }}
                        className="w-4 h-4 mt-8 text-blue-600 bg-neutral-100 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"/>
                    <label htmlFor="checked-checkbox" className="ml-2 mt-8 text-sm font-medium text-neutral-900">Upgrade</label>
                </div>

                {
                    enableUpgrade && (
                        <>
                            <div className="mt-4">
                                <label className="text-left block mb-2 text-sm font-medium text-neutral-700" htmlFor="file_input">Contract address</label>
                                <input
                                    type="text"
                                    placeholder="contract address to upgrade"
                                    onChange={(event) => setContractAddress(event.target.value)}
                                    value={contractAddress ?? ''}
                                    className="block w-full text-sm border border-gray-300 cursor-pointer focus:outline-none p-1"
                                />
                            </div>
                            {
                                !contractAddress && (
                                    <div className="text-left mt-2">
                                        <span className="text-xs text-red-500">Contract address is required</span>
                                    </div>
                                )
                            }
                        </>
                    )
                }

                <div className="flex justify-center gap-3 my-8">
                    {
                        !enableUpgrade && (
                            <button
                                onClick={handleDeploy}
                                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                Deploy
                            </button>
                        )
                    }
                    {
                        enableUpgrade && (
                            <button
                                onClick={handleUpgrade}
                                disabled={!contractAddress}
                                className={`text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${!contractAddress ? "cursor-not-allowed disabled hover:bg-teal-700" : ""} `}>
                                Upgrade
                            </button>
                        )
                    }
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