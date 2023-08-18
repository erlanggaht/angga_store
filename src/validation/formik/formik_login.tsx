import { Formik } from 'formik';
import { LoginSchema, Login_InitialValues } from '@/validation/formik/schema/login';
import useUsers from '@/store/useregister_store';


export default function Formik_Login({children} : any) {
  const [users] = useUsers((state) => [state.users])

   function LoginSubmit(values : any) {
    var validasi_user = false
    users.forEach(function(m :any) {
        if(m.username == values.username || m.password == values.password) validasi_user = true 
        else validasi_user = false
      })
      
      if(validasi_user) {
        alert('login success')
        location.href ='/'

        // location.href ='/'
      }else  alert('wrong username and password')
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
