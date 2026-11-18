import { NavLink, useSearchParams } from "react-router";
import Logo from "./Logo";
import SearchIcon from "../assets/search.svg";
import MiniCartIcon from "../assets/mini-cart.svg";
import { useState } from "react";

export default function Header() {
    const [params] = useSearchParams();
    const [query, setQuery] = useState(params.get("filter") ?? "");

    return (
        <header className="header bg-white flex flex-col gap-[48px] justify-center px-[32px] lg:px-[128px] h-[190px] py-[32px]">
            <div className="flex gap-[48px] items-center">
                <Logo />

                <div className="flex rounded-[8px] overflow-hidden justify-between">
                    <input
                        className="bg-[#F7F7F7] w-[800px] h-[60px] px-[24px]"
                        placeholder="Pesquisar produto..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className="bg-[#F7F7F7] px-[24px] flex justify-center items-center">
                        <img src={SearchIcon} className="shrink-0 size-[24px]"/>
                    </button>
                </div>

                <a className="hidden lg:flex text-dark-gray-2 underline text-[16px] whitespace-nowrap"> Cadastre-se </a>
                <a className="hidden lg:flex w-[114px] h-[40px] flex justify-center items-center bg-primary rounded-[8px] font-bold text-white shrink-0"> Entrar </a>

                <button className="ml-[48px] flex items-center justify-center">
                    <img src={MiniCartIcon} className="shrink-0 size-[30px]"/>
                </button>
            </div>

            <nav className="flex gap-[32px] text-dark-gray-2">
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary underline underline-offset-8 decoration-2 font-bold" : "")}> Home </NavLink>
                <NavLink to="/produtos" className={({ isActive }) => (isActive ? "text-primary underline underline-offset-8 decoration-2 font-bold" : "")}> Produtos </NavLink>
                <NavLink to="/categorias" className={({ isActive }) => (isActive ? "text-primary underline underline-offset-8 decoration-2 font-bold" : "")}> Categorias </NavLink>
                <NavLink to="/pedidos" className={({ isActive }) => (isActive ? "text-primary underline underline-offset-8 decoration-2 font-bold" : "")}> Meus Pedidos </NavLink>
            </nav>
        </header>
    )
}