import * as Yup from 'yup';

type TLogin_IntialValues = {
    username : string,
    password : string | number
}

export const Login_InitialValues : TLogin_IntialValues = {
    username : "",
    password : ""
}

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .required('Required!'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required!'),
});