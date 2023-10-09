import {useCreatedOffers} from "hooks/queries/useCreatedOffers";
import {useNavigate} from "react-router-dom";
import {useCancelTransaction} from "hooks/transactions/useCancelTransaction";
import {Trim} from "@multiversx/sdk-dapp/UI";

export const CreatedOffersSection = () => {
    const {createdOffers}  = useCreatedOffers();
    const {onCancelOffer} = useCancelTransaction();
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-8">
            <h5 className="font-bold text-xl mb-2">Created Offers</h5>
            <button
                className="mt-8 text-left max-w-fit w-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                onClick={() => navigate("/create")}>Create new offer</button>
            <div className="flex bg-gray-50 h-full px-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase border-b-2">
                        <tr>
                            <th>Offer ID</th>
                            <th>My NFT</th>
                            <th>Wanted NFT</th>
                            <th>From</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {createdOffers.map((offer) => (
                            <tr key={offer.offerId}>
                                <td>{offer.offerId}</td>
                                <td>{`${offer.nftCollection}-${offer.nftNonce}`}</td>
                                <td>{`${offer.wantedNftCollection}-${offer.wantedNftNonce}`}</td>
                                <td><Trim text={offer.wantedAddress} /></td>
                                <td>
                                    <button
                                        className="text-left max-w-fit w-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                                        onClick={() => onCancelOffer(offer.offerId)}>Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}