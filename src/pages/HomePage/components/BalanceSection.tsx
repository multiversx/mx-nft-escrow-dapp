import {useGetAccountInfo, useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks";
import {FormatAmount} from "@multiversx/sdk-dapp/UI";

export const BalanceSection = () => {
    const { network } = useGetNetworkConfig();
    const {account}  = useGetAccountInfo();

    return (
        <div> Your balance: <FormatAmount value={account.balance} egldLabel={network.egldLabel} /> </div>
    )
}