import Link from "next/link";

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
            <Link href="/">
              <a className="">Home</a>
            </Link>

            <Link href="/advocates">
              <a className="">Discover</a>
            </Link>

            <Link href="/">
              <a className="">Join us</a>
            </Link>

            <Link href="/search">
              <a className="">Search</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
