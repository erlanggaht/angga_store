import Card_Image from "@/Components/MAIN/moleculs/card_image";

export default function Main_Area3() {
  return (
    <>
        <div className="column1 flex justify-center flex-col items-center md:flex-row  md:w-1/2 mx-auto ">
            <div className="SaleUpTo flex-grow text-center md:text-left">
              <h1 className="break-words text-7xl font-bold tracking-wide leading-[90px] text-primary_color w-full md:w-[350px]">SALE UP TO 40%</h1>
              <p className="break-words px-3 py-5 font-[400] md:w-[350px]"><span className="uppercase font-bold text--primary_color">store</span> shopping at the angga store get lots of discount promos for the first purchase and so on</p>
            </div>

            <Card_Image
             
              desc_card="Volledige flows die jou helpen retentie te verhogen"
              title_card="Retentie"
              style_add='before:bg-[url("https://unsplash.com/photos/xPJYL0l5Ii8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkyMDAwODIxfA&force=true&w=640")] md:ml-28 mt-12 md:mt-0' />

             
          </div>



            <div className="column1 flex flex-col items-center mt-28 md:mt-12 md:flex-row md:justify-center  md:w-1/2 md:mx-auto ">
            {/* */}
            <Card_Image
              desc_card="Volledige flows die jou helpen retentie te verhogen"
              title_card="Retentie"
              style_add='before:bg-[url("https://unsplash.com/photos/QRN47la37gw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkyMDAzMDEwfA&force=true&w=640")] -mt-16 md:-mt-32 ' />


            <Card_Image
              desc_card="Volledige flows die jou helpen retentie te verhogen"
              title_card="Retentie"
              style_add='before:bg-[url("https://unsplash.com/photos/Fg15LdqpWrs/download?force=true&w=640")] md:ml-32 mt-12 md:mt-0' />

             
          </div>      
    </>
  )
}
