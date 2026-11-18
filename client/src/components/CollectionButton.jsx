export default function CollectionBtn({ icon, title }) {
    return (
        <button className="flex flex-col gap-[12px]">
            <div className="group bg-white flex justify-center items-center size-[140px] rounded-[50%]">
                {icon}
            </div>
            <span className="font-bold text-dark-gray-2"> {title} </span>
        </button>
    )
}