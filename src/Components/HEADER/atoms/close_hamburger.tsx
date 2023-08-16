import { icon_small } from "@/assets/exported/icon_small";
import { TClassName } from "@/Components/HEADER/type_data/Tmenu_hamburger";

export default function Close_Hamburger({className ,onClick} :  TClassName ) {
    return (
        <>  
            <img src={icon_small.close.src} alt={icon_small.close.alt} height={36} width={36} className={className} onClick={onClick}/>
        </>
    )
}
