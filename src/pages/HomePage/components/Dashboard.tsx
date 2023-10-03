import {logout} from "@multiversx/sdk-dapp/utils";
import {DashboardBalance} from "./DashboardBalance.tsx";
import {DashboardCreatedOffers} from "./DashboardCreatedOffers.tsx";
import {DashboardWantedOffers} from "./DashboardWantedOffers.tsx";

export const Dashboard = () => {
    return (
        <div>
            <button onClick={() => logout()}>Logout</button>
            <h2>Dashboard</h2>
            <DashboardBalance />
            <DashboardCreatedOffers />
            <DashboardWantedOffers />
        </div>
    )
}