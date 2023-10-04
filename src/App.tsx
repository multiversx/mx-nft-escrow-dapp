import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {ENVIRONMENT, walletConnectV2ProjectId} from "config";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage/HomePage";
import {UnlockPage} from "pages/UnlockPage/UnlockPage";
import {NotificationModal, SignTransactionsModals, TransactionsToastList} from "@multiversx/sdk-dapp/UI";
import {CreateOfferPage} from "./pages/CreateOfferPage/CreateOfferPage.tsx";
import {NavBar} from "./components/NavBar.tsx";

function App() {

    return (
        <DappProvider
            environment={ENVIRONMENT}
            customNetworkConfig={{
                name: "customConfig",
                walletConnectV2ProjectId
            }}
        >
            <Router>
                <TransactionsToastList  />
                <NotificationModal />
                <SignTransactionsModals />

                <NavBar />
                <div style={{
                    width: "100%",
                    minWidth: "100%",
                    padding: "2rem"
                }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/unlock" element={<UnlockPage />} />
                        <Route path="/create" element={<CreateOfferPage />} />
                    </Routes>
                </div>
            </Router>
        </DappProvider>
    )
}

export default App