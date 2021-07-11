import * as Yup from 'yup';

export const formValues = {
    model: '',
    brand: '',
    description: '',
    price: '',
    available: '',
    shipping: false
}

export const validation = () => (
    Yup.object({
        model: Yup.string()
            .required('Sorry, the model is required'),
        brand: Yup.string()
            .required('Sorry, the brand is required'),
        description: Yup.string()
            .required('Sorry, the description is required'),
        price: Yup.number()
            .required('Must be a price')
            .min(1, 'Sorry the min is 1')
            .max(100000, 'Sorry its 500 max'),
        available: Yup.number()
            .required('Do we have stock ?'),
        shipping: Yup.boolean()
            .required('Do we offer shipping')
    })
)