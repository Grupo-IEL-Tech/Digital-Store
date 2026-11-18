import { useState } from "react"
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"

export default function Gallery({ classname, width, height, radius, showThumbs, images }) {
    const [selected, setSelected] = useState(0)

    return (
        <div 
            style={{backgroundImage: `url(${images[selected].src})`, width: `${width}px`, height: `${height}px`}} 
            className={`bg-no-repeat bg-cover bg-center flex justify-between items-center p-[24px] ${classname}`}
        >
            <button onClick={() => setSelected(selected - 1)} disabled={selected <= 0} className="flex justify-center items-center bg-white p-4 rounded-[50px] size-[40px]"> 
                <img src={arrowLeft}/> 
            </button>
            <button  onClick={() => setSelected(selected + 1)} disabled={selected >= images.length - 1} className="flex justify-center items-center bg-white p-4 rounded-[50px] size-[40px]"> 
                <img src={arrowRight}/> 
            </button>
        </div>
    )
}