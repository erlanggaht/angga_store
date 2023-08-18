import Categories_Area from "@/Components/MAIN/moleculs/categories_area";
import { useCallback, useEffect } from 'react'
import get_product_fav from "@/fetching/get_product_fav";
import { useState } from 'react'

// Lazy Image Loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from '@/utility/loader_image';
import spinner from '@/assets/spinner.svg'


export const endpont_mensClothing = 'https://fakestoreapi.com/products?limit=4'
export const endpoint_jewelry = 'https://fakestoreapi.com/products/category/jewelery'

export default function Main_Area2() {

  const [loading, setLoading] = useState(false)
  const [dataFav, setDataFav] = useState<any>([])
  const [idDataStorage] = useState(1)
  const [bgButtonActive, setBgButtonActve] = useState(false)

  // If default async getdata fav useEffect
  useEffect(() => {
    (async function get_productFav() {
      const response = await get_product_fav(setLoading, endpont_mensClothing)
      setDataFav(response)
      localStorage.setItem('dataFav1', JSON.stringify({ data: response, active: true, id_storage: 1 }))

    })()

    return () => {
      setLoading(false)
      setDataFav([])
    }
  }, [])


  // if use data localstorage
  useEffect(() => {
    const dataFav1Active = JSON.parse(localStorage.getItem('dataFav1') || "{}")
    const dataFav2Active = JSON.parse(localStorage.getItem('dataFav2') || "{}")

    if (dataFav1Active.active || dataFav1Active.id_storage == 1) {
      setDataFav(dataFav1Active.data)
    }
    if (dataFav2Active.active || dataFav2Active.id_storage == 2) {
      setDataFav(dataFav2Active.data)
      return
    }

    return () => {
      setLoading(false)
    }
  }, [idDataStorage])



  // get Mens Clothing
  const get_MensClothing = useCallback(async () => {
    const dataFav1Active = JSON.parse(localStorage.getItem('dataFav1') || "{}")
    if (dataFav1Active.id_storage == 1) {
      setBgButtonActve(true);
      return setDataFav(dataFav1Active.data)
    }

    const response = await get_product_fav(setLoading, endpont_mensClothing)
    setDataFav(response)
    localStorage.setItem('dataFav1', JSON.stringify({ data: response, active: true, id_storage: 1 }))
    setBgButtonActve(true)
  }, [])

  // Get Jewelry
  const get_Jewelry = useCallback(async () => {
    const dataFav2Active = JSON.parse(localStorage.getItem('dataFav2') || "{}")
    if (dataFav2Active.id_storage == 2) {
      setBgButtonActve(false);
      return setDataFav(dataFav2Active.data)
    }
    const response = await get_product_fav(setLoading, endpoint_jewelry)
    setDataFav(response)
    localStorage.setItem('dataFav2', JSON.stringify({ data: response, active: true, id_storage: 2 }))
    setBgButtonActve(false);


  }, [])




  return (
    <>
      <Categories_Area text_btn1="Men's Clothing" text_btn2="Jewelry" click_btn1={get_MensClothing} click_btn2={get_Jewelry} bg_active={bgButtonActive} />

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12  border-2 border-t-0 border-border_color [&>*:nth-child(1)]:border-l-0 text-primary_color">
        {loading && <p>Loading get data ..</p>}
        {dataFav == 'error' && <p>Sorry. get data error!</p>}
        {dataFav && dataFav.map((m: any, i: any) => {
          return <div className={`card_${i + 1} border-l-2 border-border_color`} key={i}>
            <div className="flex justify-center border-t-2 lg:border-b-2 border-border_color p-6">
              <LazyLoadImage
                alt={m.alt}
                src={m.image}
                height={'100%'}
                width={'100%'}
                placeholderSrc={spinner}
                wrapperClassName='lazy-loader'
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='md:w-[172px]  md:h-[225px] w-[142px] h-[200px] mx-auto'
                />
            </div>
            <div className="px-4 pt-1 pb-1 m-3  h-[132px] lg:h-[auto]">
              <div className="flex items-center justify-between flex-wrap lg:flex-nowrap ">
                <p className="font-bold break-words capitalize " style={{ inlineSize: '180px' }}>{m.category}</p>
                <p className="text-sm italic">Rp.50.000</p>
              </div>
              <p className="text-sm italic py-2 md:py-0 capitalize">{m.title}</p>
            </div>
          </div>


        })}
      </div>
    </>
  )

}
