export default function FilterGroup({ title, inputType, options }) {
    return (
        <div>
            <h3 className="text-dark-gray-2 font-bold text-[14px]"> {title} </h3>

            {options?.map((o) =>
                <div className="flex items-center gap-[10px] mt-[8px]">
                    <input className="size-[22px] accent-primary" value={o.value} type={inputType} />
                    <label className="font-medium text-dark-gray-2"> {o.text} </label>
                </div>
            )}

        </div>
    )
}