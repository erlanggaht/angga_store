import {NavLink} from 'react-router-dom' 
export default function List_Menu() {
    return (
        <>
            <li className=" py-3 px-6 text-left lg:text-center border-r  font-light text-lg lg:text-[13px]"><NavLink to={'#'} className="hover:underline">Home</NavLink></li>
            <li className=" py-3 px-6 text-left lg:text-center border-r  font-light text-lg lg:text-[13px]"><NavLink to={'#'} className="hover:underline">About</NavLink></li>
            <li className=" py-3 px-6 text-left lg:text-center border-r  font-light text-lg lg:text-[13px]"><NavLink to={'#'} className="hover:underline">Hot Sale</NavLink></li>
            <li className=" py-3 px-6 text-left lg:text-center border-r  font-light text-lg lg:text-[13px]"><NavLink to={'#'} className="hover:underline">Promo</NavLink></li>
            <li className=" py-3 px-6 text-left lg:text-center border-r  font-light text-lg lg:text-[13px]"><NavLink to={'/login'} className="hover:underline">Login</NavLink></li>
            
        </>
    )
}
