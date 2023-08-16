import { icon_small } from "@/assets/exported/icon_small";
import { TClassName } from "@/Components/HEADER/type_data/Tmenu_hamburger";

export default function Hamburger_Mobile({className,onClick} : TClassName) {
    return (
        <>  
            <img src={icon_small.menu.src} alt={icon_small.menu.alt} height={36} width={36} className={className} onClick={onClick} />
        </>
    )
}
