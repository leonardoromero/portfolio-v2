import * as Yup from 'yup';

export const initialValues = {
    name: '',
    lastName: '',
    email: '',
    message: '',
}

export const validationSchema = {
    name: Yup.string().required('Please provide your name :)'),
    lastName: Yup.string().required('Please provide your last name :)'),
    email: Yup.string().email().required('Please provide your e-mail :)'),
    message: Yup.string().required('Describe your project :)'),
}