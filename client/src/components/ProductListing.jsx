import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[32px] object-contain max-w-full">
            {products?.map((p) => 
                (<ProductCard
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    priceDiscount={p.priceDiscount}
                />)
            )}
        </div>
    )
}