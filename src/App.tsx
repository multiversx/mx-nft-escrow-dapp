import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {ENVIRONMENT, walletConnectV2ProjectId} from "config";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage/HomePage.tsx";
import {UnlockPage} from "pages/UnlockPage/UnlockPage.tsx";
import {NotificationModal, SignTransactionsModals, TransactionsToastList} from "@multiversx/sdk-dapp/UI";

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
                <TransactionsToastList />
                <NotificationModal />
                <SignTransactionsModals />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/unlock" element={<UnlockPage />} />
                </Routes>
            </Router>
        </DappProvider>
    )
}

export default App