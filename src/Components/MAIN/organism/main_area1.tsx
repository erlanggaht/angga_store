import Categories_Area from "@/Components/MAIN/moleculs/categories_area";

// Lazy Image Loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import spinner from '@/assets/spinner.svg'
import { afterLoadingImage, beforeLoadingImage } from '@/utility/loader_image';



export default function Main_Area1() {
  

  return (
    <>
        <Categories_Area text_btn1="Flash Sale" text_btn2="Favorite" hidden={true}  />

<div className=" mt-8 area_main border-2 border-border_color text-primary_color">
  <div className="grid grid-rows-3 grid-col-4 md:grid-flow-col gap-0    ">
    <div className="Yeezy col-span-3 md:col-span-3 border-b-2 border-border_color p-3 ">
      <h2 className="text-primary_color font-bold text-6xl text-center py-20 bg-secondary_bgcolor grid place-content">YEESZY</h2>
    </div>

    <div className="row-span-2  col-span-3 flex items-center  ">

        <div className=" w-full flex  items-center">
        <div className="card1 h-[225px] w-full flex flex-col justify-center lg:items-start lg:flex-row gap-2">
          <div className=" flex justify-center">
        <LazyLoadImage
      alt={'Yesszy Cool Blue'}
      src={'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'} 
      height={'100%'}
      width={'100%'}  
      wrapperClassName='lazy-loader'
      placeholderSrc={spinner}
      beforeLoad={() => beforeLoadingImage()}
      afterLoad={() => afterLoadingImage()}
      effect='blur' 
      className="md:w-[172px] md:h-[225px] w-[142px] h-[200px] w-30 mx-auto"/>
        </div>
        <div className="px-3">
        <h3 className="font-bold text-md uppercase leading-[13px] mt-6">Blue Enjoy</h3>
        <span className="text-sm italic">Yesszy Cool Blue</span><br/>
        <span className="text-sm">Rp.120.000</span>

        </div>
        </div>
        </div>

        <div className="h-full w-full flex items-center border-l-2 border-border_color">
        <div className="card1 h-[225px] w-full flex flex-col  justify-center lg:items-start lg:flex-row gap-2">
          <div className=" flex justify-center">
        <LazyLoadImage
      alt={'Yesszy Dunmin Black'}
      src={'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'} 
      height={'100%'}
      width={'100%'}  
      wrapperClassName='lazy-loader'
      placeholderSrc={spinner}
      beforeLoad={() => beforeLoadingImage()}
      afterLoad={() => afterLoadingImage()}
      effect='blur' 
      className="md:w-[172px] md:h-[225px] w-[142px] h-[200px] w-30 mx-auto"/>
        </div>
        <div className="px-3">
        <h3 className="font-bold text-md uppercase leading-[13px] mt-6">SilvBlk</h3>
        <span className="text-sm italic">Yesszy Dunmin Black</span><br/>
        <span className="text-sm">Rp.320.000</span>
        </div>
        </div>
        </div>
        
    </div>


    <div className=" md:h-full md:row-span-3 col-span-4 hidden md:inline relative
    before:bg-[url('https://unsplash.com/photos/MUZM626vF28/download?ixid=M3wxMjA3fDB8MXxjb2xsZWN0aW9ufDN8ODg0MTA3M3x8fHx8Mnx8MTY5MTgzMjQ1Mnw&force=true&w=640')] before:absolute before:top-0 before:w-full before:h-full  before:bg-cover before:bg-top md:before:bg-center">

    </div>
  </div>
</div>
    </>
  )
}
