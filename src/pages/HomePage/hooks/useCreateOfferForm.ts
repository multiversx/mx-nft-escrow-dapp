import * as Yup from "yup";
import {useCallback} from "react";
import {
    useCreateOfferTransaction,
} from "hooks/transactions/useCreateOfferTransaction";
import {sendTransactions} from "@multiversx/sdk-dapp/services";
import {useGetAccountInfo} from "@multiversx/sdk-dapp/hooks";

export type CreateOfferValuesType = {
    collectionId: string;
    collectionNonce: number;
    wantedCollectionId: string;
    wantedCollectionNonce: number;
    wantedAddress: string;
};

type CreateOfferSchemaObject = {
    [key in keyof CreateOfferValuesType]: Yup.Schema<
        CreateOfferValuesType[key]
    >;
};

export const useCreateOfferForm = () => {
    const {account} = useGetAccountInfo();
    const {getCreateOfferTransaction} = useCreateOfferTransaction();

    const initialValues: CreateOfferValuesType = {
        collectionId: "",
        collectionNonce: -1,
        wantedCollectionId: "",
        wantedCollectionNonce: -1,
        wantedAddress: ""
    };

    const validationSchema = Yup.object().shape<CreateOfferSchemaObject>({
        collectionId: Yup.string().required("Collection is required"),
        collectionNonce: Yup.number().required("Collection nonce is required"),
        wantedCollectionId: Yup.string().required("Wanted collection is required"),
        wantedCollectionNonce: Yup.number().required("Wanted collection nonce is required"),
        wantedAddress: Yup.string().required("Wanted address is required")
    });

    const onSubmit = useCallback(
        async (values: CreateOfferValuesType) => {
            console.log(values);

            const tx = getCreateOfferTransaction({
                address: account.address,
                collectionId: values.collectionId,
                nonce: values.collectionNonce,
                wantedCollectionId: values.wantedCollectionId,
                wantedNonce: values.wantedCollectionNonce,
                wantedAddress: values.wantedAddress
            });

            await sendTransactions({
                transactions: tx,
                transactionsDisplayInfo: {
                    processingMessage: 'Creating offer',
                    errorMessage: 'An error has occured during creating offer',
                    successMessage: 'Offer created successful'
                },
                redirectAfterSign: false
            });
        },
        []
    );

    return {
        initialValues,
        validationSchema,
        onSubmit
    }
}