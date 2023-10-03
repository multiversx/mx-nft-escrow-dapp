import {logout} from "@multiversx/sdk-dapp/utils";
import {DashboardBalance} from "./DashboardBalance";
import {DashboardCreatedOffers} from "./DashboardCreatedOffers";
import {DashboardWantedOffers} from "./DashboardWantedOffers";

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