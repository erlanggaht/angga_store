import { Formik } from 'formik';
import { RegisterSchema, Register_InitialValues } from './schema/register';
import { useNavigate } from 'react-router-dom';
import useUsers from '@/store/useregister_store';

export default function Formik_Register({children} : any) {
  const [users,add_user] = useUsers((state : any) : [any,any] => [state.users,state.add_user])
  const navigate = useNavigate()

  function register_submit(values : any) {
  // Validasi Username
  let validasi_username = false;
  users.forEach((m : any) => {
    if(m.username == values.username ) validasi_username = true
  })  

    if(!validasi_username) {
      add_user(values)
      localStorage.setItem('databases',JSON.stringify(users))
      alert('register success!')
      setTimeout(() => {
        navigate('/login')
      },1200)
        
    }
    else alert('username not match')
  }

  

  return (
    <Formik
    initialValues={Register_InitialValues}
    validationSchema={RegisterSchema}
    onSubmit={values => {
      register_submit(values)
    }}
  >

    {children}

    </Formik>
  )
}
