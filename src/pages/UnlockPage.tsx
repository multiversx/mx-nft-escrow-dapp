import {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
} from "@multiversx/sdk-dapp/UI";

export const UnlockPage = () => {
    return (
        <div>
            <h2>Login with:</h2>
            <div>
                <ExtensionLoginButton
                    loginButtonText="DeFi Wallet"
                    callbackRoute="/"
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