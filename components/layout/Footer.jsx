import Link from "next/link";
import Img from "../tools/Img";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Discover people",
    url: "/advocates",
  },
  {
    name: "Search people",
    url: "/search",
  },
];

function Footer() {
  return (
    <footer className="mt-auto bg-skin-200">
      <div className="w-full h-[80px]">
        <Img src="/assets/patternpad-footer.svg" alt="Pattern" />
      </div>
      <div className="container space-y-2 py-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-2xl font-bold ">Cados.dev</p>
          <nav className="flex items-center gap-4">
            {links.map((data) => (
              <Link href={data.url} key={data.name}>
                <a className="text-base">{data.name}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-base">
            © {new Date().getFullYear()} Cados.dev - All rights reserved.
          </p>
          <p className="text-base">
            Designed by{" "}
            <Link href="https://sujoykh.vercel.app">
              <a target="_blank" className="text-base font-bold">
                Sujoy
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
