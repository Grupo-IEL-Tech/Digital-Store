import { useNavigate } from "react-router"

export default function ProductCard({ id, image, name, price, priceDiscount }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-[24px] w-full max-w-full">
            <button onClick={() => navigate(`/produto/${id}`)} className="flex max-w-full h-auto object-contain rounded-[8px] overflow-hidden">
                <img src={image} className="w-full object-cover" />
            </button>

            <div className="text-[24px]">
                <h3 className="text-dark-gray-2"> {name} </h3>
                <div className="flex gap-[12px]">
                    <span className={`${priceDiscount? 'text-light-gray line-through':'font-bold'}`}> ${price} </span>
                    {priceDiscount && <span className="font-bold"> ${priceDiscount} </span>}
                </div>
            </div>
        </div>
    )
}