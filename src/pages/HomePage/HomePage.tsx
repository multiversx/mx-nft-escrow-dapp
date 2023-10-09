import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {BalanceSection} from "./components/BalanceSection";
import {CreatedOffersSection} from "./components/CreatedOffersSection";
import {WantedOffersSection} from "./components/WantedOffersSection";

export const HomePage = () => {
    const isLoggedIn  = useGetIsLoggedIn();

    return (
        isLoggedIn ? (
            <div className="h-screen bg-neutral-100 text-3xl font-bold text-center flex flex-col items-center py-4">
                <h2>Dashboard</h2>
                <BalanceSection />
                <CreatedOffersSection />
                <WantedOffersSection />
            </div>
        ) : (
            <div className="h-screen bg-neutral-100 text-3xl font-bold text-center flex justify-center items-center">
                Please connect your wallet
            </div>
        )
    )
}