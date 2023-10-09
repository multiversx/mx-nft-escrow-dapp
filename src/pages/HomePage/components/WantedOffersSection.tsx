import {useWantedOffers} from "hooks/queries/useWantedOffers";
import {useConfirmTransaction} from "hooks/transactions/useConfirmTransaction";

export const WantedOffersSection = () => {
    const {wantedOffers}  = useWantedOffers();
    const {onAcceptOffer} = useConfirmTransaction();

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
                            <td>{`${offer.wantedNftCollection}-${offer.wantedNftNonce}`}</td>
                            <td>{`${offer.nftCollection}-${offer.nftNonce}`}</td>
                            <td>{offer.creator}</td>
                            <td><button onClick={() => {
                                onAcceptOffer({
                                    offerId: offer.offerId,
                                    collectionId: offer.wantedNftCollection,
                                    nonce: offer.wantedNftNonce,
                                })
                            }}>Accept</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}