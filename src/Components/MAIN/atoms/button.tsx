import { Tbutton } from "@/Components/MAIN/type_data/Tbutton";


export default function Button({
    background_color,
    color,
    text_button,
    border = 'border border-transparent',
    onClick 
} : Tbutton) {

  return (
    <>
        <button className={`${background_color} ${color} ${border}  py-2 w-40 text-center hover:scale-95 hover:transition-all text-md shadow-sm active:scale-90`} onClick={onClick} >{text_button}</button>
    </>
  )
}
