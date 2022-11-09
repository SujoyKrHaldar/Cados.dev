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
];

function NavbarMob() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  return (
    <section className="md:hidden w-screen h-screen z-50 py-8">
      <div className="container w-full h-full flex items-center justify-end">
        <div className="flex-1 max-w-lg bg-skin-700 h-full rounded-3xl p-16 py-48 flex flex-col justify-evenly">
          <div className="absolute w-fit h-fit top-8 right-8 flex items-center gap-8">
            {/* <Link href="/search">
              <a
                className="flex items-center justify-center
                 text-white text-6xl"
              >
                <BiSearch />
              </a>
            </Link> */}

            <div
              className="md:hidden flex items-center justify-center bg-white
                 text-black-500 text-4xl p-3 rounded-xl cursor-pointer
                 "
            >
              <MdArrowForwardIos />
            </div>
          </div>

          <div className="">
            <div className="w-[65px] h-[65px] bg-skin-500 rounded-full overflow-hidden cursor-pointer">
              {user?.picture && <Img src={user.picture} alt={user?.name} />}
            </div>

            <p className="">
              Hello{" "}
              <span className="font-semibold block">
                {user?.nickname || user?.given_name || user?.name}
              </span>
            </p>
          </div>

          <div className="text-white">
            <p className="font-semibold text-black">Quick link</p>

            <nav className="">
              {links.map((data) => (
                <Link href={data.url} key={data.name}>
                  <a className="block">{data.name}</a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="">
            <p>Join us</p>
            <p>Log out</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarMob;
