import { useParams } from "react-router";
import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import { products } from "../data/data";

export default function ProductViewPage() {
    const params = useParams();

    return (
        <main className="bg-[#F9F8FE] px-[32px] lg:px-[128px] py-[36px]">
            <div className="flex gap-[48px]">
                <Gallery
                    width="700"
                    height="570"
                    radius="4"
                    showThumbs
                    images={[
                        { src: products[params.id - 1].image },
                        { src: "/product-thumb-2.jpeg" },
                        { src: "/product-thumb-3.jpeg" },
                        { src: "/product-thumb-4.jpeg" },
                        { src: "/product-thumb-5.jpeg" }
                    ]}
                />

                <BuyBox name={products[params.id - 1].name} reference="389438493" price={products[params.id - 1].price} priceDiscount={products[params.id - 1].priceDiscount} stars="4" rating="4.7">
                    <div className="mt-[24px]">
                        <h3 className="text-light-gray font-bold"> Tamanho </h3>
                        <ProductOptions options={[39, 40, 41, 42, 43]} radius="8" shape="square" type="text"/>
                    </div>

                    <div>
                        <h3 className="text-light-gray font-bold"> Cor </h3>
                        <ProductOptions options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]} shape="circle" type="color"/>
                    </div>
                </BuyBox>
                
            </div>

            <Section className="!p-[0px] mt-[36px]" title="Produtos Relacionados">
                <ProductListing products={products.filter((p) => p.id != params.id)}/>
            </Section>

        </main>
    )
}