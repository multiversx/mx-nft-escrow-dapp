import {Link, useNavigate} from "react-router-dom";
import {logout} from "@multiversx/sdk-dapp/utils";
import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";

export const NavBar = () => {
    const isLoggedIn = useGetIsLoggedIn();
    const navigate = useNavigate();

    return (
        <ul style={{width: "100vw"}}>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/unlock">Unlock</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li style={{
                float: "right",
                marginRight: "14px"
            }}>
                {
                    isLoggedIn ? (
                        <button onClick={() => logout(`${window.location.origin}`, undefined, false)}>Logout</button>
                    ) : (
                        <button onClick={() => navigate("unlock") } >Connect</button>
                    )
                }
            </li>
        </ul>
    )
}