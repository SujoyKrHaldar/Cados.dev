import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-auto py-4">
      <div className="container flex items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Cados.dev - All rights reserved.</p>
        <p>
          Designed by{" "}
          <Link href="https://sujoykh.vercel.app">
            <a className="">Sujoy</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
