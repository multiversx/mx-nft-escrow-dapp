import {useWantedOffers} from "hooks/queries/useWantedOffers";

export const WantedOffersSection = () => {
    const {wantedOffers}  = useWantedOffers();

    return (
        <div className="card" style={{display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "3rem"}}>
            <h2><b>Wanted Offers</b></h2>
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
                    {wantedOffers.map((offer) => (
                        <tr key={offer.offerId}>
                            <td>{offer.offerId}</td>
                            <td>{`${offer.nftCollection}-${offer.nftNonce}`}</td>
                            <td>{`${offer.wantedNftCollection}-${offer.wantedNftNonce}`}</td>
                            <td>{offer.wantedAddress}</td>
                            <td><button>Accept</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}