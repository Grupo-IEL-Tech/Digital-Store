import { Link } from "react-router";

export default function Section({
  title, titleAlign = "left",
  link, children, className
}) {
  return (
    <section className={`section flex flex-col gap-[24px] px-[32px] lg:px-[128px] py-[36px] ${className}`}>
      <div>
        <h2 className={`text-dark-gray-2 text-[24px] font-bold ${titleAlign === "center" && 'text-center'}`}>{title}</h2>
        {link && <Link to={link.href} className="text-primary"> {link.text} → </Link>}
      </div>
      {children}
    </section>
  );
}