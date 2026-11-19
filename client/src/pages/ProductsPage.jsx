import { useState } from "react";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

export default function ProductsPage() {
    const products = [{
                            id: 1,
                            name: "Tênis Nike Masculino",
                            image: "/produc-image-1.jpeg",
                            price: "257,00",
                            priceDiscount: "180,90"
                        }, {
                            id: 2,
                            name: "Tênis Casual Branco",
                            image: "/produc-image-2.jpeg",
                            price: "274,00",
                        }, {
                            id: 3,
                            name: "Tênis Nike Masculino",
                            image: "/produc-image-3.jpeg",
                            price: "291,00",
                            priceDiscount: "202,00"
                        }, {
                            id: 4,
                            name: "Tênis All-Star",
                            image: "/produc-image-4.jpeg",
                            price: "308,00",
                            priceDiscount: "213,90"
                        }, {
                            id: 5,
                            name: "Tênis Nike Esportivo",
                            image: "/produc-image-5.jpeg",
                            price: "325,00",
                        }]

    const [selectedOption, setSelectedOption] = useState("Menor Preço")

    return (
        <main className="bg-[#F9F8FE] px-[32px] lg:px-[128px] py-[36px]">
            <div className="flex justify-between items-center">
                <span> <b> Todos os Produtos - </b> {products.length} produtos </span>

                <div className="flex border border-black p-[16px] w-[308px] h-[60px] rounded-[8px]">
                    <span className="font-bold text-dark-gray-2"> Ordenar por: </span>
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="flex-1" name="ordenacao" id="ordenacao-select">
                        <option value="Menor Preço">Menor Preço</option>
                        <option value="Maior Preço">Maior Preço</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-[120px] justify-between">
                <aside>
                    <div className="flex flex-col gap-[12px] bg-white w-[308px] p-[32px] mt-[60px] rounded-[8px]">
                        <h2 className="text-[16px] text-dark-gray-2 font-bold"> Filtrar por </h2>
                        <hr className="border border-light-gray-2" />
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[{ text: "Adiddas" }, { text: "Calenciaga" }, { text: "K-Swiss" }, { text: "Nike" }, { text: "Puma" }]}
                        />
                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={[{ text: "Esporte e Lazer" }, { text: "Casual" }, { text: "Utilitário" }, { text: "Corrida" }]}
                        />
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[{ text: "Masculino" }, { text: "Feminino" }, { text: "Unissex" }]}
                        />
                        <FilterGroup
                            title="Marca"
                            inputType="radio"
                            options={[{ text: "Novo" }, { text: "Usado" }]}
                        />
                    </div>
                </aside>

                <Section className="!px-0">
                    <ProductListing
                        products={products}
                    />
                </Section>
            </div>

        </main>
    )
}