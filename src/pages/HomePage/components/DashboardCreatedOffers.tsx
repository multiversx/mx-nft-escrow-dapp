import {useCreatedOffers} from "hooks/queries/useCreatedOffers";
import {DashboardCreateOffer} from "./DashboardCreateOffer/DashboardCreateOffer";

export const DashboardCreatedOffers = () => {
    const {createdOffers}  = useCreatedOffers();

    return (
        <div>
           <h2>Created Offers</h2>
            <DashboardCreateOffer />
            <code> {JSON.stringify(createdOffers)} </code>
        </div>
    )
}