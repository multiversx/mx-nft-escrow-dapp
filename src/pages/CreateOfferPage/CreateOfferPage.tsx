import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn";
import {CreateOfferFormik} from "./components/CreateOfferFormik";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const CreateOfferPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useGetIsLoggedIn();

    useEffect(() => {
        if(!isLoggedIn) {
            navigate("/unlock");
        }
    });

    return (
        <div>
            <div>
                <button style={{display: "flex"}} onClick={() => navigate(-1)}>{`< Back`}</button>
                <h2>Create Offer</h2>
            </div>
            <CreateOfferFormik />
        </div>
    )
}