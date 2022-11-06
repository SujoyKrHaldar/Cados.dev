import { useState } from "react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Img from "../tools/Img";
import Link from "next/link";
import { noFormater } from "../tools/NumberFormater";

function Landing({ number }) {
  const [searchedQuery, setSearchedQuery] = useState("");
  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchedQuery === "") {
      return;
    }
    const query = searchedQuery.trim().replaceAll(" ", "+");
    router.push(`/search?name=${query}`);
  };

  return (
    <section className="pt-48 pb-16 w-full h-auto">
      <div className="absolute w-[45%] h-full right-0 top-0">
        <Img
          src="/assets/hero-image.png"
          alt="Hero image"
          // src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          position="top"
        />
        {/* <div className="absolute w-1/2 h-full inset-0 bg-gradient-to-r from-white"></div> */}
      </div>

      <div className="absolute w-1/3 h-full left-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          className="opacity-50 grayscale"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="container w-full h-full flex items-center">
        <div className="space-y-4 max-w-xl">
          <p className="tag">Discover peoples</p>
          <h1 className="font-bold">The Platform for all Developers.</h1>
          <form
            onSubmit={handelSubmit}
            className="bg-gray-200 flex items-center justify-between gap-2
             py-1 px-2 rounded-xl max-w-lg "
          >
            <input
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              type="text"
              className="flex-1 bg-transparent px-4 py-3 outline-none "
              placeholder="Find your next collaborator"
            />
            {searchedQuery.length > 0 ? (
              <div
                onClick={() => setSearchedQuery("")}
                className="text-2xl p-3 cursor-pointer "
              >
                <GrFormClose />
              </div>
            ) : (
              <div className="text-2xl p-3">
                <BiSearch />
              </div>
            )}
          </form>
          <p className="font-thin">
            Total <span className="font-semibold">{noFormater(number)}</span>{" "}
            developers already registered.{" "}
            <Link href="/register">
              <a className="font-semibold">Join now</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
