import {ErrorMessage, Field, Form, useFormikContext} from "formik";
import {CreateOfferValuesType} from "../../hooks/useCreateOfferForm";

export const DashboardCreateOfferForm = () => {
    const { errors } = useFormikContext<CreateOfferValuesType>();

    return (
        <Form>
            <div>Your NFT:</div>
            <div>
                <label>NFT Collection</label>
                <Field
                    type="text"
                    placeholder="NFT collection"
                    id="collectionId"
                    name="collectionId"
                />
                <ErrorMessage
                    name="collectionId"
                    component="div"
                />
            </div>
            <div>
                <label>NFT Nonce</label>
                <Field
                    type="text"
                    placeholder="NFT nonce"
                    id="collectionNonce"
                    name="collectionNonce"
                />
                <ErrorMessage
                    name="collectionNonce"
                    component="div"
                />
            </div>

            <hr />

            <div>Wanted NFT:</div>
            <div>
                <label>NFT Collection</label>
                <Field
                    type="text"
                    placeholder="Wanted NFT collection"
                    id="wantedCollectionId"
                    name="wantedCollectionId"
                />
                <ErrorMessage
                    name="wantedCollectionId"
                    component="div"
                />
            </div>
            <div>
                <label>NFT Nonce</label>
                <Field
                    type="text"
                    placeholder="Wanted NFT nonce"
                    id="wantedCollectionNonce"
                    name="wantedCollectionNonce"
                />
                <ErrorMessage
                    name="wantedCollectionNonce"
                    component="div"
                />
            </div>

            <div>
                <label>Wanted address</label>
                <Field
                    type="text"
                    placeholder="Wanted address"
                    id="wantedAddress"
                    name="wantedAddress"
                />
                <ErrorMessage
                    name="wantedAddress"
                    component="div"
                />
            </div>

            <button
                type="submit"
                disabled={Object.entries(errors).length > 0}
            >
                <span>Submit</span>
            </button>
        </Form>
    )
}