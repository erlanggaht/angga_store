import { Field} from 'formik';


type TInput = {
    classStyle ?: string,
    placholder ?: string,
    id : string,
    type : 'checkbox' | 'username' | 'password',
    required ?: boolean,
    name ?: string
} 

export default function Input({
    classStyle = '',
    placholder = '',
    id,
    type,
    required = false,
    name
} : TInput) {
    
  return (
    <>
        <Field name={name} type={type} id={id} className={`${classStyle}`} placeholder={placholder} required={required} autoComplete={'off'}/>
    </>
  )
}
