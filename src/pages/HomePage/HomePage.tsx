import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {Dashboard} from "./components/Dashboard";

export const HomePage = () => {
    const isLoggedIn  = useGetIsLoggedIn();

    return (
        isLoggedIn ? (
            <Dashboard />
        ) : (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh"
            }} >
                Please connect to your wallet
            </div>
        )
    )
}