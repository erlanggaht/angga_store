import * as Yup from 'yup';

type TRegister_IntialValues = {
    fullname : string,
    username : string,
    password : string | number,
}

export const Register_InitialValues : TRegister_IntialValues = {
    fullname: "",
    username : "",
    password : ""

}

export const RegisterSchema = Yup.object().shape({
    fullname : Yup.string()
    .min(2,'Too Short!')
    .max(30,'Too Long!')
    .required('Required!')
    ,
    username: Yup.string()
        .min(2, 'Too Short!')
        .required('Required!')
        .matches(/^\S*$/, "Name without spaces"),
    password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required!'),
});