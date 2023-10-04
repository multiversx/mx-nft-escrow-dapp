import {useCreatedOffers} from "hooks/queries/useCreatedOffers";
import {useNavigate} from "react-router-dom";

export const DashboardCreatedOffers = () => {
    const {createdOffers}  = useCreatedOffers();
    const navigate = useNavigate();

    return (
        <div>
           <h2>Created Offers</h2>
            <button onClick={() => navigate("/create")}>Create new offer</button>
            <code> {JSON.stringify(createdOffers)} </code>
        </div>
    )
}