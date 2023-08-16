
type TCard_Image  = {
    title_card : string,
    desc_card : string
    style_add : string
}


export default function Card_Image({
     title_card,
     desc_card,
     style_add,
    } : TCard_Image) {

        
  return (
    <>
        <div className={`card_image image_saleup1 shadow rounded-3xl w-[330px] h-[400px]
            relative before:absolute before:h-full before:bg-cover  before:w-full before:-z-50 before:rounded-3xl before:opacity-80 before:grayscale-[40%]  ${style_add}`}>
              <div className="md:w-[330px] flex flex-col items-center justify-end h-full pb-6 px-3 drop-shadow text-white">
                <h3 className="font-bold">{title_card}</h3>
                <span className="text-center text-sm" style={{inlineSize:"190px"}}>{desc_card}</span>
              </div>
            </div>
    </>
  )
}
