export default function ProductCard({ image, name, price, priceDiscount }) {
    return (
        <div className="flex flex-col gap-[24px] m-[12px] w-[292px]">
            <div className="flex w-[292px] h-[321px] rounded-[8px] overflow-hidden">
                <img src={image} className="object-cover" />
            </div>

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