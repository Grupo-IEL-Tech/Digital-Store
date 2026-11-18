import Logo from "./Logo";
import facebookIcon from "../assets/facebook.svg"
import instagramIcon from "../assets/instagram.svg"
import twitterIcon from "../assets/twitter.svg"
import { Link } from "react-router";

function Information({ title, informations }) {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="font-medium text-[18px]"> {title} </h2>
            <ul className="flex flex-col gap-[8px]">
                {informations.map((i) =>
                    <li key={i.text}>
                        <Link to={i.link} className="hover:underline"> {i.text} </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-dark-gray flex flex-col gap-[32px] px-[64px] pt-[64px] pb-[32px]">
            <div className="flex justify-between gap-[256px] text-white">
                <div className="flex flex-col gap-[32px]">
                    <Logo color="white" />
                    <p className="w-[310px] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex gap-[32px]">
                        <img src={facebookIcon} />
                        <img src={instagramIcon} />
                        <img src={twitterIcon} />
                    </div>
                </div>

                <div className="flex gap-[128px]">
                    <Information
                        title="Informação"
                        informations={[
                            { text: "Sobre Drip Store", link: "/sobre" },
                            { text: "Segurança", link: "/seguranca" },
                            { text: "Wishlist", link: "/wishlist" },
                            { text: "Blog", link: "/blog" },
                            { text: "Trabalhe Conosco", link: "/trabalhe-conosco" },
                            { text: "Meus Pedidos", link: "/meus-pedidos" },
                        ]}
                    />

                    <Information
                        title="Categorias"
                        informations={[
                            { text: "Camisetas", link: "/" },
                            { text: "Calças", link: "/" },
                            { text: "Bonés", link: "/" },
                            { text: "Headphones", link: "/" },
                            { text: "Tênis", link: "/" },
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-[24px]">
                    <h2 className="font-medium text-[18px]"> Contato </h2>
                    <ul className="flex flex-col gap-[8px]">
                        <li> <p className="w-[230px]"> Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161 </p> </li>
                        <li> <span> (85) 3051-3411 </span> </li>
                    </ul>
                </div>
            </div>

            <hr className="border border-dark-gray-3"/>
            <div className="w-full flex justify-center text-white">
                <span> &copy; 2026 Digital College </span>
            </div>
        </footer>
    )
}