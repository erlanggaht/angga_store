import Button from "@/Components/MAIN/atoms/button";
import {memo} from 'react'
type TCategories_Area = {
    text_btn1 : string,
    text_btn2 : string
    click_btn1 ?: any
    click_btn2 ?: any,
    bg_active ?: Boolean,
    hidden ?: Boolean
}

export default memo(function Categories_Area({
    text_btn1,
    text_btn2,
    click_btn1,
    click_btn2,
    bg_active,
    hidden
} : TCategories_Area) {

        console.log(bg_active)
    return (
        <>
            <div className="categories_area flex items-center ">
                <div className="categorie_button flex flex-col md:flex-row  gap-2">
                    <Button background_color={bg_active ? 'bg-primary_color' : 'bg-secondary_bgcolor'} 
                    color={bg_active ? "text-primary_bgcolor" : ""} text_button={text_btn1} onClick={() => click_btn1()}/>
                    <Button background_color={!bg_active ? 'bg-primary_color' : 'bg-transparent'} 
                    color={bg_active ? "text-primary_color" : "text-primary_bgcolor"} border="border border-border_color" text_button={text_btn2} onClick={() => click_btn2()} />
                </div>

                <div className={`area_NextPrev flex-grow w-full text-center ${hidden ? "hidden" : ""}`}>
                    <span className="text-xl shadow-sm inline-block p-1 px-2 mx-1 text-center rounded-full border-2 border-border_color cursor-pointer hover:scale-95 active:scale-90"  onClick={() => click_btn1()}>&#8592;</span>
                    <span className="text-xl shadow-sm inline-block p-1 px-2 mx-1 text-center rounded-full border-2 border-border_color cursor-pointer hover:scale-95 active:scale-90" onClick={() => click_btn2()}>&#8594;</span>
                </div>
            </div>
        </>
    )
})
