import { Link } from "react-router";
import LogoHeader from "../assets/logo-header.svg";
import LogoFooter from "../assets/logo-footer.svg";

export default function Logo({ color = "pink" }) {
  return (
    <Link className="logo flex justify-center w-[253px] h-[44px]" to="/" aria-label="Digital Store - início">
      <img
        src={color === "white"? LogoFooter:LogoHeader}
        className="shrink-0 fill-white"
        alt="Logotipo da Digital Store"
      />
    </Link>
  );
}