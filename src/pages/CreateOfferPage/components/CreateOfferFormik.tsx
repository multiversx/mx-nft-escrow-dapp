import {Formik} from "formik";
import {useCreateOfferForm} from "../hooks/useCreateOfferForm";
import {CreateOfferForm} from "./CreateOfferForm";

export const CreateOfferFormik = () => {
    const {initialValues, validationSchema, onSubmit} = useCreateOfferForm();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={onSubmit}
        >
            <CreateOfferForm />
        </Formik>
    )
}