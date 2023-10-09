import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {BalanceSection} from "./components/BalanceSection";
import {CreatedOffersSection} from "./components/CreatedOffersSection";
import {WantedOffersSection} from "./components/WantedOffersSection";

export const HomePage = () => {
    const isLoggedIn  = useGetIsLoggedIn();

    return (
        isLoggedIn ? (
            <div>
                <h2>Dashboard</h2>
                <BalanceSection />
                <CreatedOffersSection />
                <WantedOffersSection />
            </div>
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