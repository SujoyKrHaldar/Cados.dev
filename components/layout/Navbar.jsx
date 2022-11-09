import Link from "next/link";
import Img from "../tools/Img";
import { useAuth0 } from "@auth0/auth0-react";
import { BiMenuAltRight } from "react-icons/bi";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import NavbarMob from "./NavbarMob";
import { useState } from "react";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Discover people",
    url: "/advocates",
  },
];

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  // console.log({"user " : user});
  // console.log("isAuth " + isAuthenticated);
  // console.log("loading " + isLoading);

  const handelClick = () => {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <header className="absolute inset-0 w-full h-fit z-50 py-8">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-3">
              <p className="text-3xl">Cados.Dev</p>
            </a>
          </Link>

          <nav className="flex items-center gap-2">
            {links.map((data) => (
              <Link href={data.url} key={data.name}>
                <a
                  className={`hidden md:block text-base py-2 px-4 rounded-md hover:bg-white  
                  border  hover:border-gray-300 ${
                    router.pathname === data.url
                      ? " border-skin-700 bg-white"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  {data.name}
                </a>
              </Link>
            ))}
            {!isLoading && !isAuthenticated ? (
              <p
                onClick={() => loginWithRedirect()}
                className={`md:text-base py-2 px-4 rounded-md md:hover:bg-white  
                  border border-transparent md:hover:border-gray-300 cursor-pointer`}
              >
                Join us
              </p>
            ) : (
              <div className="flex items-center gap-2">
                <p
                  onClick={() =>
                    logout({
                      returnTo: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
                    })
                  }
                  className="hidden md:block text-base py-2 px-4 rounded-md lg:hover:bg-white  
                  border border-transparent lg:hover:border-gray-300 cursor-pointer"
                >
                  Logout
                </p>

                <div className="w-[43px] h-[43px] bg-skin-500 rounded-full overflow-hidden cursor-pointer">
                  {user?.picture && <Img src={user.picture} alt={user?.name} />}
                </div>
              </div>
            )}

            <Link href="/search">
              <a
                className={` hidden md:flex items-center justify-center
                 text-black-500 text-4xl md:text-xl p-3  rounded-full border hover:border-gray-300
                 ${
                   router.pathname === "/search"
                     ? "border-white md:border-skin-700"
                     : "bg-white border-transparent"
                 }
                 `}
              >
                <BiSearch />
              </a>
            </Link>

            <div
              onClick={handelClick}
              className="md:hidden flex items-center justify-center bg-white
                 text-black-500 text-4xl p-3 rounded-full cursor-pointer"
            >
              <BiMenuAltRight />
            </div>
          </nav>
        </div>
      </header>

      <NavbarMob isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;
