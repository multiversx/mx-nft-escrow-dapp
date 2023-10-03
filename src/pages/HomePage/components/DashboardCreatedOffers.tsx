import {useCreatedOffers} from "hooks/queries/useCreatedOffers.ts";
import {DashboardCreateOffer} from "./DashboardCreateOffer/DashboardCreateOffer.tsx";

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