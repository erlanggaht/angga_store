import { Formik } from 'formik';
import { LoginSchema, Login_InitialValues } from './schema/login';


export default function Formik_Component({children} : any) {

  async function LoginSubmit(values : {}) {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login',{
        method : 'POST',
        body : JSON.stringify({
          values
        })
      })
      console.log(response)
    } catch (error) {
      console.log({error})
    }

  }

  return (
    <Formik
    initialValues={Login_InitialValues}
    validationSchema={LoginSchema}
    onSubmit={values => {
      LoginSubmit(values)
    }}
  >

    {children}

    </Formik>
  )
}
