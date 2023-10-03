import {useNavigate} from "react-router-dom";
import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {Dashboard} from "./components/Dashboard.tsx";

export const HomePage = () => {
    const navigate = useNavigate();
    const isLoggedIn  = useGetIsLoggedIn();

    return (
        <div>
            {
                isLoggedIn ? (
                  <Dashboard />
                ) : (
                    <button onClick={() => navigate("/unlock")}>Connect</button>
                )
            }
        </div>
    )
}