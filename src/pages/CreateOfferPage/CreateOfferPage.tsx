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
        <div className="pt-32 px-32">
            <div className="flex flex-row mx-auto">
                <button type="button"
                        onClick={() => navigate(-1)}
                        className="text-left block border border-teal-700 rounded py-2 px-4 bg-teal-700 hover:bg-teal-900 text-amber-50">
                    <div className="flex justify-center items-center">
                        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                        <p className="ml-2">Prev</p>
                    </div>
                </button>
            </div>
            <CreateOfferFormik />
        </div>
    )
}