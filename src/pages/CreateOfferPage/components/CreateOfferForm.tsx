import {ErrorMessage, Field, Form, useFormikContext} from "formik";
import {CreateOfferValuesType} from "../hooks/useCreateOfferForm";

export const CreateOfferForm = () => {
    const { errors } = useFormikContext<CreateOfferValuesType>();

    return (
        <Form className="form">
            <div className="card" style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <h4><b>Your NFT:</b></h4>
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
                        type="number"
                        placeholder="NFT nonce"
                        id="collectionNonce"
                        name="collectionNonce"
                        min="-1"
                    />
                    <ErrorMessage
                        name="collectionNonce"
                        component="div"
                    />
                </div>

                <h4><b>Wanted NFT:</b></h4>
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
                        type="number"
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
                    Submit
                </button>
            </div>



        </Form>
    )
}