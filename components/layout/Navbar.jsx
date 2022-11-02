import Link from "next/link";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <header className="absolute inset-0 w-full h-fit z-50 py-8">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-3">
              <p className="text-3xl">Cados.Dev</p>
            </a>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/advocates">
              <a className="">Discover people</a>
            </Link>

            <Link href="/">
              <a className="">Join us</a>
            </Link>

            <Link href="/search">
              <a className="flex items-center justify-center text-2xl">
                <BiSearch />
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
