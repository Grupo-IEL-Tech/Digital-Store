import { useState } from "react"
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"

export default function Gallery({ classname, width, height, radius, showThumbs, images }) {
    const [selected, setSelected] = useState(0)

    return (
        <div className="flex flex-col gap-[24px]">
            <div
                 style={{ backgroundImage: `url(${images[selected].src})`, width: `${width}px`, height: `${height}px`, borderRadius: `${radius}px` }}
                className={`bg-no-repeat bg-cover bg-center flex justify-between items-center p-[24px] ${classname}`}
            >
                <button onClick={() => setSelected(selected - 1)} disabled={selected <= 0} className="flex justify-center items-center bg-white p-4 rounded-[50px] size-[40px]">
                    <img src={arrowLeft} />
                </button>
                <button onClick={() => setSelected(selected + 1)} disabled={selected >= images.length - 1} className="flex justify-center items-center bg-white p-4 rounded-[50px] size-[40px]">
                    <img src={arrowRight} />
                </button>
            </div>

            {showThumbs && 
                <div style={{width: `${width}px`}} className="flex gap-[16px] overflow-hidden">  
                    {images.map((img, i) => 
                        <button 
                            className={`flex w-[130px] shrink-1 rounded-[8px] overflow-hidden ${selected === i && "border border-4 border-primary"}`}
                            onClick={() => setSelected(i)}
                        > 
                            <img src={img.src}/> 
                        </button>
                    )}
                </div>}
        </div>
    )
}