export default function CollectionCard({ bgImage }) {
    return (
        <button
            style={{ backgroundImage: bgImage }}
            className="relative bg-cover bg-no-repeat p-[30px] w-[512px] h-[312px]"
        >
            <span className="absolute bg-[#E7FF86] p-[8px] rounded-[50px] top-[20px] left-[24px]"> 30% OFF </span>

            <span className="absolute bg-white rounded-[8px] text-primary p-[12px] w-[30%] bottom-[32px] left-[24px] text-[16px] font-bold"> Comprar </span>
        </button>
    )
}