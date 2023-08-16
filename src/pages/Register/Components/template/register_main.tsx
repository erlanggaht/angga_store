import Form from '@/pages/Register/Components/moleculs/form_register';
import Area_BgImage from '@/pages/Register/Components/atoms/area_bgImage';
import { NavLink } from "react-router-dom";

export default function Register_Main() {
    return (
        <>

            <section className='area_form_register grid place-content-center '>
                <h1 className='text-xl text-center font-bold uppercase '><span className='bg-primary_bgcolor p-3 px-0 -rotate-2 inline-block'>AnggaStore.</span></h1>
                <Form />
                <div className='px-7 text-[12px] font-light'>
                <div className='flex items-center mt-4 justify-between'>
                    <p id='linksss'>
                        <NavLink to={'/'} 
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""
                       }
                        >&#8592; Back to home </NavLink>
                    </p>
                    <p id='linksss' >
                        <NavLink to={'/login'} 
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""
                        }
                        > Login Account  </NavLink>
                    </p>
                    </div>

                   
                </div>
            </section>

                        <Area_BgImage />
        </>
    )
}
