import Carousel from "@/Components/HEADER/moleculs/carousel";
import Navigasi from "@/Components/HEADER/moleculs/navigasi";
import Main_Area1 from "@/Components/MAIN/organism/main_area1";
import Main_Area2 from "@/Components/MAIN/organism/main_area2";
import Main_Area3 from "@/Components/MAIN/organism/main_area3";
import Main_Area4 from "@/Components/MAIN/organism/main_area4";
import Helmet_Title, { titles } from "@/utility/helmet_title";
import {NavLink} from 'react-router-dom'

export default function Home() {
    return (
        <>

                    {/* Title  */}
                    <Helmet_Title title={titles.home} />

            <header className="text-primary_color">
                {/* Navigasi */}
                <div className="fixed bg-primary_bgcolor w-full z-[999999]  shadow text-right">
                     <NavLink to={'/login'} className="p-3 px-4 inline-block hover:underline text-md bg-secondary_bgcolor">Login</NavLink> 
                    
                   <NavLink to={'/signup'} className="p-3 px-4 inline-block hover:underline text-md bg-secondary_bgcolor border-l border-border-[#222]">Signup</NavLink> 
                </div>
                <Navigasi />

                {/* Hero */}
                <section className="Hero">
                    <Carousel />
                </section>
            </header>


            {/* Main Content */}
            <main className="my-16 md:px-8 px-4 ">

                <section className="main_area_1">
                    <Main_Area1 />
                </section>

                <section className="main_area_2 mt-20">
                    <Main_Area2 />
                </section>


                <section className="main area_3 mt-20 ">

                    <Main_Area3 />

                </section>


                <section className="main_area4 mt-32" id="all_product">

                    <Main_Area4 />

                </section>

            </main>


            <footer className="text-secondary_color mt-16 border border-border_color ">
                <p className="text-sm p-5 text-right">Created by <a href="https://erlanggahidayatullah.vercel.app" className="underline"> Erlangga Hidayatullah </a></p>
            </footer>

        </>
    )
}
