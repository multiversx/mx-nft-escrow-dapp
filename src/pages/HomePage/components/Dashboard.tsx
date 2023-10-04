import {DashboardBalance} from "./DashboardBalance";
import {DashboardCreatedOffers} from "./DashboardCreatedOffers";
import {DashboardWantedOffers} from "./DashboardWantedOffers";

export const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <DashboardBalance />
            <DashboardCreatedOffers />
            <DashboardWantedOffers />
        </div>
    )
}