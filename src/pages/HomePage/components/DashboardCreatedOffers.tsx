import {useCreatedOffers} from "hooks/queries/useCreatedOffers";
import {useNavigate} from "react-router-dom";

export const DashboardCreatedOffers = () => {
    const {createdOffers}  = useCreatedOffers();
    const navigate = useNavigate();

    return (
        <div className="card" style={{display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "3rem"}}>
            <h2><b>Created Offers</b></h2>
            <button style={{
                float: "left",
                marginBottom: "10px",
                width: "12rem",
                marginLeft: "14px"
            }} onClick={() => navigate("/create")}>Create new offer</button>
            <div className="container" style={{display: "flex"}}>

                <table>
                    <thead>
                    <tr>
                        <th>Offer ID</th>
                        <th>My NFT</th>
                        <th>Desired NFT</th>
                        <th>From</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {createdOffers.map((offer) => (
                        <tr key={offer.offerId}>
                            <td>{offer.offerId}</td>
                            <td>{`${offer.nftCollection}-${offer.nftNonce}`}</td>
                            <td>{`${offer.wantedNftCollection}-${offer.wantedNftNonce}`}</td>
                            <td>{offer.wantedAddress}</td>
                            <td><button>Cancel</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}