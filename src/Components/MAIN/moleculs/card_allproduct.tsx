import get_all_product from '@/fetching/get_all_product'
import {useEffect,useState} from 'react'

type TCardAllProductProps = {
    lindex : { limit : number,index : number},
    setLindex : React.Dispatch<React.SetStateAction<{
        limit: number;
        index: number;
    }>>
}

export default function Card_AllProduct({lindex} : TCardAllProductProps) {
    const [loading,setLoading] = useState(false)
    const [dataProduct,setDataProduct] = useState<any>([])
    

    useEffect(() => {
        
       
      (async function get_allproduct(){
          const response = await get_all_product(setLoading)
          let response_limit = response.slice(lindex.index, lindex.limit + lindex.index)
          setDataProduct(response_limit)
      })()
    
      return () => {
        setLoading(false)
      }
    }, [lindex])

    

    return (
        <div className="cards grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 ">

        {loading && <p>Loading get data ..</p>}
        {dataProduct == 'error' && <p>Sorry. get data error!</p>}
        {dataProduct.map((m :any,i : any) => {
            return <div className="card "  key={i}>
                <div className='flex justify-center bg-white cursor-pointer hover:opacity-80 tooltip'>
                    <img src={m.image} height={230} width={230} className="w-[150px] h-[175px]" />
                    <span className="tooltiptext">{m.title}</span>
                 </div>   
                 <div className='bg-secondary_bgcolor mt-4 overflow-x-hidden  '>
                <p className=" px-2 pt-1 text-md font-bold break-words  w-[230px] h-[25px] overflow-hidden cursor-pointer hover:text-primary_color hover:underline " >{m.title} me
                </p>
                <p className="categorie_product px-2 pt-2 text-sm opacity-75 italic">{m.category}</p>
                <p className="price px-2 pt-2 pb-2 text-sm font-bold">${m.price}</p>
                </div>
            </div>
        })}
        </div>
    )
}
