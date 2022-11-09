import Img from "../tools/Img";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

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

function NavbarMob({ isMenuOpen, setMenuOpen }) {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  return (
    <section
      className={`fixed inset-0 md:hidden w-screen h-screen z-50 py-8 ${
        isMenuOpen
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <div className="container w-full h-full flex items-center justify-end">
        <div
          className="flex-1 max-w-xl bg-skin-700 h-full rounded-3xl p-12 py-48 
        flex flex-col justify-evenly overflow-hidden"
        >
          <div className="absolute w-full h-full left-0 top-0">
            <Img
              src="/assets/patternpad-hero.svg"
              alt="pattern"
              className="opacity-50"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-skin-700 "></div>
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-skin-700 "></div>
          </div>

          <div
            onClick={() => setMenuOpen(false)}
            className="md:hidden flex items-center justify-center bg-white
                 text-black-500 text-3xl p-3 rounded-xl cursor-pointer 
                 absolute w-fit h-fit top-8 right-8
                 "
          >
            <MdArrowForwardIos />
          </div>

          <div className="space-y-6">
            <p className="text-5xl font-semibold">Quick link</p>

            <nav className="space-y-1">
              {links.map((data) => (
                <Link href={data.url} key={data.name}>
                  <a className="text-3xl p-2 font-regular block">{data.name}</a>
                </Link>
              ))}
            </nav>
          </div>
          <div className="translate-y-[13rem]">
            {!isLoading && !isAuthenticated ? (
              <p
                onClick={() => loginWithRedirect()}
                className="bg-skin-500 px-6 py-3 rounded-lg w-fit border border-skin-200"
              >
                Join Cados
              </p>
            ) : (
              <div
                className="flex items-center border border-skin-200 
            gap-6 p-3 rounded-xl bg-skin-500"
              >
                <div
                  className="w-[70px] h-[70px] 
             bg-skin-500 rounded-2xl overflow-hidden"
                >
                  {user?.picture && <Img src={user.picture} alt={user?.name} />}
                </div>
                <div className="flex h-full flex-col justify-between gap-1 py-1">
                  <div className="space-y-1">
                    <p className="tag">Hello</p>
                    <p className="text-3xl font-semibold first-letter:uppercase">
                      {user?.nickname || user?.given_name || user?.name}
                    </p>
                  </div>

                  <p
                    onClick={() =>
                      logout({
                        returnTo: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
                      })
                    }
                    className="text-2xl"
                  >
                    Log out
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarMob;
