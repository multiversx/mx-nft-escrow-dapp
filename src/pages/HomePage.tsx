import {useNavigate} from "react-router-dom";
import {useGetAccountInfo, useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {formatAmount, logout} from "@multiversx/sdk-dapp/utils";

export const HomePage = () => {
    const navigate = useNavigate();

    const isLoggedIn  = useGetIsLoggedIn();
    const {account}  = useGetAccountInfo();

    return (
        <div>
            {
                isLoggedIn ? (
                    <div> Your balance: {formatAmount({
                        input: account.balance,
                        addCommas: true,
                        decimals: 18,
                        showLastNonZeroDecimal: false,
                    })} </div>
                ) : (
                    <button onClick={() => navigate("/unlock")}>Connect</button>
                )
            }
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}