import Link from "next/link";

function Navbar() {
  return (
    <>
      <header className="absolute inset-0 w-full h-fit z-50 py-8">
        <div className="container flex items-center justify-between gap-4">
          <p className="text-3xl">CadosDev</p>

          <nav className="flex items-center gap-6">
            <Link href="/">
              <a className="">Home</a>
            </Link>

            <Link href="/">
              <a className="">Discover</a>
            </Link>

            <Link href="/">
              <a className="">Join us</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
