import type { Code } from "@multiversx/sdk-core"

export type DeployOrUpgradeParamsType = {
    operation: 'deploy' | 'upgrade';
    address: string | undefined;
    code: Code;
    args: any[];
    gasLimit: number;
}