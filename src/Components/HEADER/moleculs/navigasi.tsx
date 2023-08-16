import List_Menu from "@/Components/HEADER/atoms/list_menu";
import { icon_small } from "@/assets/exported/icon_small";
import Hamburger_Mobile from "@/Components/HEADER/atoms/menu_hamburger";
import { useState } from "react";
import Close_Hamburger from "@/Components/HEADER/atoms/close_hamburger";




export default function Navigasi() {
    const [switchMenu,setSwitchMenu] = useState<Boolean>(false)

    // Mobile Menu Switch
    function Switch_MenuMobile (isActive : String) {
        if(isActive == 'Open') setSwitchMenu(true)
        else setSwitchMenu(false)
    }


    return (
        <>
            <nav className="navbar lg:flex lg:justify-between relative bg-primary_bgcolor z-[999999] ">
                <section className="title_nav lg:flex lg:items-center ">
                    <h1 className="uppercase font-bold text-3xl text-primary_color px-4 py-2 text-center lg:text-left  ">Angga<br /> Store</h1>
                </section>

                <section className="lg:flex flex-grow lg:justify-end my-0 lg:my-0">
                    <div className="flex justify-between items-center lg:flex lg:flex-col lg:justify-between text-left  py-2 px-5  lg:px-0 mt-6 lg:mt-0">
                        <p className="text-sm lg:w-40 font-light semibold italic text-left lg:text-right break-words lg:break-normal" style={{ inlineSize: '218px' }}><span className="font-bold">Sumedang</span>, Jl Nyampay Pamulihan Tanjungsari</p>
                        
                        <p className={`hidden lg:inline-block text-sm text-center lg:text-right pb-1 font-normal lg:w-full`}>Menu &#8594; </p>

                        {/* Hamburger */}
                            {/* Open */}
                            <Close_Hamburger className={`menu_hamburger lg:hidden 
                            ${switchMenu ?  "fixed -right-12 w-0 h-0  transition-all" : "right-0 w-[36px]  transition-all duration-500" } cursor-pointer`} onClick={() => Switch_MenuMobile('Open')}/>
                            {/* Close */}
                           <Hamburger_Mobile  className={`close_hamburger lg:hidden 
                            ${!switchMenu ?  "fixed -right-12 w-0 h-0  transition-all ":"right-0 w-[36px]   transition-all duration-500" } cursor-pointer`} onClick={() => Switch_MenuMobile('Close')} />
                    </div>

                    <div className={`flex flex-col-reverse lg:flex lg:flex-col lg:ml-2  lg:relative
                    ${switchMenu ?" hidden transition-all duration-500" :  " flex transition-all duration-500" } `}>

                        {/* Navbar - Menu Right Top */}
                        <div className="menu_top flex items-center lg:flex lg:items-center justify-center lg:justify-end text-sm border border-b-2 border-t-0 border-border_color  ">
                            <div className="menu_contact flex flex-col lg:flex lg:flex-row lg:items-center px-6 lg:px-0 py-6 lg:py-0 ">
                                <p className="font-light text-sm">ask <span className="font-bold">+62857239765</span></p>
                                <input name="contact_input" className="border-0 border-b border-border_color text-primary_color outline-none lg:ml-16  lg:mr-4 mt-3 lg:mt-0" placeholder="search products" />
                            </div>
                            <div className="flex items-center justify-end  lg:w-60 gap-2  border-l px-4 py-6 lg:py-4 w-full  ">
                                <p>Basket</p>
                                <div className="ml-12 flex items-center">
                                    <span className="px-1">0</span><img src={icon_small.basket.src} height={28} width={28} alt={icon_small.basket.alt} />
                                </div>
                            </div>
                        </div>

                        {/* Navbar - Menu Right Bottom */}
                        <div className="menu_bottom lg:flex lg:items-center text-sm  border border-t-0 border-border_color ">
                            <menu className=" text-center lg:flex lg:items-center">
                                <List_Menu />
                                <div className="py-3 px-6  text-left lg:text-center flex justify-between">
                                    <p className="lg:px-4 font-light text-lg lg:text-[13px] ">Social Media <span className="lg:hidden inline" >&#8594;</span></p>
                                    <div className="Icon_social flex gap-3 ml-6">
                                        <img src={icon_small.fb.src} alt={icon_small.fb.alt} height={20} width={20} />
                                        <img src={icon_small.ig.src} alt={icon_small.ig.alt} height={20} width={20} />
                                        <img src={icon_small.tiktok.src} alt={icon_small.tiktok.alt} height={20} width={20} />

                                    </div>
                                </div>
                            </menu>
                        </div>
                    </div>
                </section>
            </nav>

        </>
    )
}
