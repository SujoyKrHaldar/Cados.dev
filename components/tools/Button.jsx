import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Button({
  href,
  text,
  target = "",
  visible = "",
  design = "bg-black text-white",
  icon = <BsArrowRight />,
}) {
  return (
    <>
      <Link href={href}>
        <a
          target={target}
          className={`group w-fit flex items-center justify-center gap-4 
           duration-100 ease-in-out ${design} 
           rounded-xl md:rounded-lg text-white inline-block py-4 px-9 md:py-3 md:px-8 active:scale-95`}
        >
          <p className="text-base">{text}</p>
          <div className={`flex items-center text-xl ${visible} `}>{icon}</div>
        </a>
      </Link>
    </>
  );
}

export default Button;
