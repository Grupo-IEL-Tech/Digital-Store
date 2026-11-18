import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
    return (
        <div className="flex justify-between flex-wrap">
            {products.map((p, i) => 
                (<ProductCard
                    key={i}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    priceDiscount={p.priceDiscount}
                />)
            )}
        </div>
    )
}