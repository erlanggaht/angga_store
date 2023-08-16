import Card_AllProduct from "@/Components/MAIN/moleculs/card_allproduct";
import { useState } from "react";


export default function Main_Area4() {
    const [lindex, setLindex] = useState({
        limit: 10,
        index: 0
    })
    const [disableButton, setDisableButton] = useState(false)


    function NextProduct() {
        if (lindex.limit > 20 || lindex.index > 10) {
            return
        }

        setDisableButton(true)
        setLindex({ limit: lindex.limit + 10, index: lindex.index + 10 })
    }

    function PrevProduct() {
        if (lindex.limit < 20 || lindex.index < 10) {
            return
        }

        setDisableButton(false)
        setLindex({ limit: lindex.limit - 10, index: lindex.index - 10 })
    }
    return (
        <>
            <div className="title main_are4">
                <h1 className="font-bold text-3xl text-primary_color">All Product</h1>
                <span>a client that's unhappy for a reason is a problem,a client</span>

            </div>

            <div className="card_allproduct mt-16">
                <Card_AllProduct lindex={lindex} setLindex={setLindex} />

                <div className="flex justify-center gap-3 mt-12">
                    <button className="border-border_color border p-2 px-8 font-bold text-md shadow mt-6 disabled:opacity-70" onClick={() => PrevProduct()} disabled={!disableButton}>Prev</button>
                    <button className="border-border_color border p-2 px-8 font-bold text-md shadow mt-6 disabled:opacity-70" onClick={() => NextProduct()} disabled={disableButton}>Next</button>

                </div>
            </div>

        </>
    )
}
