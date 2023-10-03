import {Formik} from "formik";
import {useCreateOfferForm} from "../../hooks/useCreateOfferForm";
import {DashboardCreateOfferForm} from "./DashboardCreateOfferForm";

export const DashboardCreateOffer = () => {
    const {initialValues, validationSchema, onSubmit} = useCreateOfferForm();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={onSubmit}
        >
            <DashboardCreateOfferForm />
        </Formik>
    )
}