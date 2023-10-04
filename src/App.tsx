import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {ENVIRONMENT, walletConnectV2ProjectId} from "config";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage/HomePage";
import {UnlockPage} from "pages/UnlockPage/UnlockPage";
import {NotificationModal, SignTransactionsModals, TransactionsToastList} from "@multiversx/sdk-dapp/UI";
import {CreateOfferPage} from "./pages/CreateOfferPage/CreateOfferPage.tsx";

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
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/unlock" element={<UnlockPage />} />
                    <Route path="/create" element={<CreateOfferPage />} />
                </Routes>
            </Router>
        </DappProvider>
    )
}

export default App