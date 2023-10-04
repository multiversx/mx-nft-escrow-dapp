import {useGetAccountInfo, useGetNetworkConfig} from "@multiversx/sdk-dapp/hooks";
import {FormatAmount} from "@multiversx/sdk-dapp/UI";

export const DashboardBalance = () => {
    const { network } = useGetNetworkConfig();
    const {account}  = useGetAccountInfo();

    return (
        <div> Your balance: <FormatAmount value={account.balance} egldLabel={network.egldLabel} /> </div>
    )
}