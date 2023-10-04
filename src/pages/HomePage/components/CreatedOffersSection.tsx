import {useCreatedOffers} from "hooks/queries/useCreatedOffers";
import {useNavigate} from "react-router-dom";
import {useCancelTransaction} from "hooks/transactions/useCancelTransaction.ts";

export const CreatedOffersSection = () => {
    const {createdOffers}  = useCreatedOffers();
    const {onCancelOffer} = useCancelTransaction();
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
                        <th>Wanted NFT</th>
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
                            <td><button onClick={() => onCancelOffer(offer.offerId)}>Cancel</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}