import {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
} from "@multiversx/sdk-dapp/UI";
import {useNavigate} from "react-router-dom";

export const UnlockPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Login with:</h2>
            <div>
                <ExtensionLoginButton
                    loginButtonText="DeFi Wallet"
                    callbackRoute="/"
                    onLoginRedirect={() => {
                        navigate("/");
                    }}
                />
                <WebWalletLoginButton
                    loginButtonText={"Web Wallet"}
                    callbackRoute="/"
                />
                <LedgerLoginButton
                    loginButtonText='Ledger'
                    callbackRoute="/"
                />
                <WalletConnectLoginButton
                    loginButtonText='xPortal App'
                    callbackRoute="/"
                />
            </div>
        </div>
    )
}