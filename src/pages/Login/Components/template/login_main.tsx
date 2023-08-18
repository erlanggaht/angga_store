import Form from '@/pages/Login/Components/moleculs/form_login';
import Area_BgImage from '@/pages/Login/Components/atoms/area_bgImage';
import { NavLink } from "react-router-dom";

export default function Login_Main() {
    return (
        <>
            <Area_BgImage />

            <section className='area_form_login  grid p-12 sm:p-0 sm:place-content-center 
            bg-[url("https://unsplash.com/photos/-IlmDnJg5cg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8fHwxNjkyMjAwNDc3fDA&force=true&w=640")]
            bg-cover bg-center sm:bg-none'>
                <h1 className='text-xl text-center font-bold uppercase '><span className='bg-primary_bgcolor p-3 px-0 -rotate-2 inline-block'>AnggaStore.</span></h1>
                <Form />
                <div className='px-7 text-[12px] font-bold text-white drop-shadow sm:font-light sm:text-primary_color sm:drop-shadow-none '>
                    <div className='flex items-center mt-4 gap-2 justify-between'>
                    <p > <a href='#'> Lost your Password? </a></p>
                    <p  id='linksss'>
                        <NavLink to={'/signup'} 
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""
                       }
                        >Create account </NavLink>
                    </p>
                    </div>

                    <p className='mt-3' id='linksss'>
                        <NavLink to={'/'} 
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""
                       }
                        >&#8592; Back to home </NavLink>
                    </p>
                    
                </div>
            </section>

        </>
    )
}
