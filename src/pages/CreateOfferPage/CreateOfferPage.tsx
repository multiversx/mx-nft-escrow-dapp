import {CreateOfferFormik} from "./components/CreateOfferFormik";
import {useNavigate} from "react-router-dom";

export const CreateOfferPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)}>{`< Back`}</button>
                <h2>Create Offer</h2>
            </div>
            <CreateOfferFormik />
        </div>
    )
}