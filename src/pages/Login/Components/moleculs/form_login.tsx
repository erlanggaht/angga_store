import Input from '@/pages/Login/Components/atoms/input';
import Formik_Login from '@/validation/formik/formik_login';
import { Form as Form_Login } from 'formik';



export default function Form() {

  return (
    <>
      <Formik_Login >
      {({ errors } : any) => (
        <Form_Login className='mt-5 text-center bg-primary_bgcolor p-6 border border-border_color' autoComplete='on'>
            <div className='area_username_input flex flex-col text-left'>
            <label htmlFor='username'  className=' text-sm pb-1'> Username or Email Address </label>
            <Input name='username' type="username" id="username" classStyle='bg-[#f9f9f9] border border-color p-2 text-sm lg:w-[290px]' placholder={''} required={true}/>
            <p className='text-red-500 lowercase text-right text-sm py-1'>{errors.username}</p>

            </div>

            <div className='area_password_input mt-6 flex flex-col text-left'>
            <label htmlFor='password'  className=' text-sm pb-1'> Password </label>
            <Input name='password' type='password' id='password' classStyle='bg-[#f9f9f9] border border-color p-2 text-sm lg:w-[290px]' placholder={''} required={true}/>
            <p className='text-red-500 lowercase text-right text-sm py-1'>{errors.password}</p>
            </div>

            <div className='rememberme login_sumbit flex justify-between items-center mt-4'>
             <div className='flex items-center gap-2 text-sm font-light'>
             <input  type='checkbox' id='checkbox'  />
             <label htmlFor='checkbox' > Remember Me</label>
             </div>
             <button type="submit" className='bg-primary_color text-primary_bgcolor p-1 px-2 rounded-sm outline-none border-0'>Log In</button>
            </div>
        </Form_Login>
      )}
      </Formik_Login>
    </>
  )
}
