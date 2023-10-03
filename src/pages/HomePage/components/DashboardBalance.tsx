import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks";
import {FormatAmount} from "@multiversx/sdk-dapp/UI";

export const DashboardBalance = () => {
    const {account}  = useGetAccountInfo();

    return (
        <div> Your balance: <FormatAmount value={account.balance} /> </div>
    )
}