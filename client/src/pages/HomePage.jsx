import CollectionBtn from "../components/CollectionButton";
import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import { Cap, Icon, Headphones, Shirt, SportShoe } from 'lucide-react';
import { trousers } from '@lucide/lab';
import CollectionCard from "../components/CollectionCard";
import { Link } from "react-router";

export default function HomePage() {
    return (
        <main className="bg-[##F9F8FE]">
            <Gallery classname="w-full"
                height="720"
                images={[
                    { src: "/home-slide-1.jpeg" },
                    { src: "/home-slide-2.jpeg" },
                    { src: "/home-slide-3.jpeg" },
                    { src: "/home-slide-4.jpeg" },
                    { src: "/home-slide-5.jpeg" },
                    { src: "/home-slide-6.jpeg" },
                    { src: "/home-slide-7.jpeg" },
                    { src: "/home-slide-8.jpeg" },
                ]}
            />

            <Section title="Coleções em destaque" className="bg-[#F9F8FE]">
                <div className="flex justify-between">
                    <CollectionCard bgImage="url('/collection-1.png')" />
                    <CollectionCard bgImage="url('/collection-2.png')" />
                    <CollectionCard bgImage="url('/collection-3.png')" />
                </div>
            </Section>

            <Section title="Coleções em destaque" titleAlign="center" className="bg-[#F9F8FE]">
                <div className="flex justify-center gap-[48px]">
                    <CollectionBtn icon={<Shirt className="size-[60px] stroke-light-gray group-hover:stroke-primary" />} title="Camisetas" />
                    <CollectionBtn icon={<Icon iconNode={trousers} className="size-[60px] stroke-light-gray group-hover:stroke-primary" />} title="Calças" />
                    <CollectionBtn icon={<Cap className="size-[60px] stroke-light-gray group-hover:stroke-primary" />} title="Bonés" />
                    <CollectionBtn icon={<Headphones className="size-[60px] stroke-light-gray group-hover:stroke-primary" />} title="Headphones" />
                    <CollectionBtn icon={<SportShoe className="size-[60px] stroke-light-gray group-hover:stroke-primary" />} title="Tênis" />
                </div>
            </Section>

            <Section title="Produtos em alta">
                <ProductListing
                    products={[{
                        name: "Tênis Nike Masculino",
                        image: "/produc-image-1.jpeg",
                        price: "257,00",
                        priceDiscount: "180,90"
                    }, {
                        name: "Tênis Casual Branco",
                        image: "/produc-image-2.jpeg",
                        price: "274,00",
                    }, {
                        name: "Tênis Nike Masculino",
                        image: "/produc-image-3.jpeg",
                        price: "291,00",
                        priceDiscount: "202,00"
                    }, {
                        name: "Tênis All-Star",
                        image: "/produc-image-4.jpeg",
                        price: "308,00",
                        priceDiscount: "213,90"
                    }, {
                        name: "Tênis Nike Esportivo",
                        image: "/produc-image-5.jpeg",
                        price: "325,00",
                    }]}
                />
            </Section>

            <Section>
                <div className="flex gap-[128px]">
                    <div className="bg-[linear-gradient(to_bottom,rgba(66,0,255,0.1),white)] rounded-[50%] size-[500px] shrink-0 flex items-center">
                        <img src="/Laye 1.png"/>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-primary"> Oferta especial </span>
                        <h2 className="text-[48px] text-dark-gray-2 font-bold"> Air Jordan edição de colecionador</h2>
                        <p className="text-[16px] w-[90%]"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip
                        </p>

                        <Link className="bg-primary text-white w-[200px] h-[40px] rounded-[8px] mt-[24px] font-bold flex justify-center items-center"> Ver Oferta </Link>
                    </div>
                </div>
            </Section>
        </main>
    )
}