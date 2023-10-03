import {useWantedOffers} from "hooks/queries/useWantedOffers";

export const DashboardWantedOffers = () => {
    const {wantedOffers}  = useWantedOffers();

    return (
        <div>
            <h2>Wanted Offers</h2>
            <code> {JSON.stringify(wantedOffers)} </code>
        </div>
    )
}