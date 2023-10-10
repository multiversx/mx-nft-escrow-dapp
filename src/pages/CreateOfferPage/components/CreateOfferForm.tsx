import {ErrorMessage, Field, Form, useFormikContext} from "formik";
import {CreateOfferValuesType} from "../hooks/useCreateOfferForm";

export const CreateOfferForm = () => {
    const { errors } = useFormikContext<CreateOfferValuesType>();

    const fieldClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

    return (
        <Form className="w-full flex flex-col p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-8">
            <h5 className="font-bold text-xl mb-2">Your NFT:</h5>

            <div className="mb-6">
                <label htmlFor="collectionId" className="block text-left mb-2 text-sm font-medium text-gray-900">NFT Collection</label>
                <Field
                    type="text"
                    placeholder="NFT collection"
                    id="collectionId"
                    name="collectionId"
                    className={fieldClassName}
                />
                <ErrorMessage
                    name="collectionId"
                    component="div"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="collectionNonce" className="block text-left mb-2 text-sm font-medium text-gray-900">NFT Nonce</label>
                <Field
                    type="number"
                    placeholder="NFT nonce"
                    id="collectionNonce"
                    name="collectionNonce"
                    min="-1"
                    className={fieldClassName}
                />
                <ErrorMessage
                    name="collectionNonce"
                    component="div"
                />
            </div>

            <h5 className="font-bold text-xl mb-2 mt-16">Wanted NFT:</h5>

            <div className="mb-6">
                <label htmlFor="wantedCollectionId" className="block text-left mb-2 text-sm font-medium text-gray-900">NFT Collection</label>
                <Field
                    type="text"
                    placeholder="Wanted NFT collection"
                    id="wantedCollectionId"
                    name="wantedCollectionId"
                    className={fieldClassName}
                />
                <ErrorMessage
                    name="wantedCollectionId"
                    component="div"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="wantedCollectionNonce" className="block text-left mb-2 text-sm font-medium text-gray-900">NFT Nonce</label>
                <Field
                    type="number"
                    placeholder="Wanted NFT nonce"
                    id="wantedCollectionNonce"
                    name="wantedCollectionNonce"
                    className={fieldClassName}
                />
                <ErrorMessage
                    name="wantedCollectionNonce"
                    component="div"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="wantedAddress" className="block text-left mb-2 text-sm font-medium text-gray-900">NFT address</label>
                <Field
                    type="text"
                    placeholder="Wanted address"
                    id="wantedAddress"
                    name="wantedAddress"
                    className={fieldClassName}
                />
                <ErrorMessage
                    name="wantedAddress"
                    component="div"
                />
            </div>

            <button
                type="submit"
                disabled={Object.entries(errors).length > 0}
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Submit
            </button>
        </Form>
    )
}