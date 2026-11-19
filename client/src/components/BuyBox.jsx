export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
    return (
        <div className="flex flex-col">
            <h2 className="text-[32px] text-dark-gray font-bold"> {name} </h2>
            <span className="text-[14px] text-dark-gray-3"> Casual | Nike | REF:{reference} </span>

            <div className="flex items-center gap-[12px] my-[12px]">
                <span className="text-[24px] text-warning">
                    <span> {stars >= 1? '★':'☆'} </span>
                    <span> {stars >= 2? '★':'☆'} </span>
                    <span> {stars >= 3? '★':'☆'} </span>
                    <span> {stars >= 4? '★':'☆'} </span>
                    <span> {stars == 5? '★':'☆'} </span>
                </span>
                <div className="bg-warning p-[8px] w-[100px] text-center rounded-[8px]">
                    <span className="text-white font-semibold"> ★ {rating} </span>
                </div>
            </div>

            <div className="flex items-end my-[12px] gap-[12px]">
                {priceDiscount && <span className="leading-none font-bold text-[32px]"> ${priceDiscount} </span>}
                <span className={`${priceDiscount ? 'text-light-gray line-through' : 'font-bold text-[32px]'}`}> ${price} </span>
            </div>

            <div>
                <h3 className="text-light-gray font-bold"> Descrição do Produto </h3>
                <p className="text-[14px] text-dark-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>

            {children}

            <button className="w-[220px] h-[48px] bg-warning text-white rounded-[8px] mt-[24px]"> Comprar </button>

        </div>
    )
}