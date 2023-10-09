import {Link, useNavigate} from "react-router-dom";
import {logout} from "@multiversx/sdk-dapp/utils";
import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";

export const NavBar = () => {
    const isLoggedIn = useGetIsLoggedIn();
    const navigate = useNavigate();

    const activePage = window.location.pathname;

    return (
        <nav className="flex items-center justify-between flex-wrap bg-stone-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">LOGO</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-stone-50 border-stone-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link className={`block mt-4 lg:inline-block lg:mt-0 text-stone-200 hover:text-white mr-4 ${activePage === "/" ? "active" : ""}`} to="/">Home</Link>
                    {
                        !isLoggedIn && <Link className={`block mt-4 lg:inline-block lg:mt-0 text-stone-200 hover:text-white mr-4 ${activePage === "/unlock" ? "active" : ""}`} to="/unlock">Unlock</Link>
                    }
                    {
                        isLoggedIn && (
                            <>
                                <Link className={`block mt-4 lg:inline-block lg:mt-0 text-stone-200 hover:text-white mr-4 ${activePage === "/create" ? "active" : ""}`} to="/create">Create</Link>
                                <Link className={`block mt-4 lg:inline-block lg:mt-0 text-stone-200 hover:text-white mr-4 ${activePage === "/deploy" ? "active" : ""}`} to="/deploy">Deployment</Link>
                            </>
                        )
                    }
                </div>
                <div>
                    {
                        isLoggedIn ? (
                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-500 hover:bg-white mt-4 lg:mt-0" onClick={() => logout(`${window.location.origin}`, undefined, false)}>Logout</button>
                        ) : (
                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-500 hover:bg-white mt-4 lg:mt-0" onClick={() => navigate("unlock") } >Connect</button>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}