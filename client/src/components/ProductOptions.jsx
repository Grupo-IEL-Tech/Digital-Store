import { useState } from "react"

export default function ProductOptions({ options, radius, shape, type }) {
    const [selected, setSelected] = useState(null)

    return (
        <div className="flex gap-2 my-[12px]">
            {
                options?.map((o, i) =>
                    <button
                        style={{
                            backgroundColor: type === "color" && o
                        }}
                        className={`bg-white border border-light-gray-2 
                                    ${shape === "square" && `size-[46px] rounded-[${radius}px]`} 
                                    ${shape === "circle" && "size-[31px] rounded-[50%]"}
                                    ${(selected === i && shape === "square") && `!bg-primary text-white`}
                                    ${(selected === i && shape === "circle") && `border-primary`}`
                                }
                        onClick={() => setSelected(i)}
                    >
                        {type === "text" && o}
                    </button>
                )
            }
        </div>
    )
}