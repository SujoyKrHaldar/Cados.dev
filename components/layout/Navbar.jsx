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
              <a className="text-base">Discover people</a>
            </Link>

            <div className="flex items-center gap-2">
              <Link href="/">
                <a
                  className="inline-block py-2 px-5 text-base
                 bg-black-500 text-white rounded-lg active:scale-95 
                 duration-100 ease-in-out"
                >
                  Join us
                </a>
              </Link>

              <Link href="/search">
                <a
                  className="flex items-center justify-center
                 text-black-500 text-xl p-3 bg-white rounded-full"
                >
                  <BiSearch />
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
