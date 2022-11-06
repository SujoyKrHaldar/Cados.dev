import { useState } from "react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Img from "../tools/Img";
import Link from "next/link";
import { noFormater } from "../tools/NumberFormater";
import Arrow from "../svgs/Arrow";
import Circle from "../svgs/Circle";

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
      <div className="absolute w-[40%] h-full right-8 top-0">
        <Img src="/assets/hero-image.png" alt="Hero image" position="top" />
      </div>

      <div className="absolute w-1/3 h-screen left-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          alt="pattern"
          className="opacity-50"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="container w-full h-full flex items-center">
        <div className="space-y-4 max-w-xl">
          <div className="space-y-4">
            <p className="tag">Discover peoples</p>
            <h1 className="font-bold z-10">
              The Platform for all{" "}
              <span className="text-brown-700 block">Developers.</span>
            </h1>
            <div className="absolute -bottom-2 -left-4 h-fit w-[380px]">
              <Circle color="#e2b8b1" />
            </div>
          </div>

          <form
            onSubmit={handelSubmit}
            className="bg-gray-200 flex items-center justify-between gap-2
             py-1 px-2 rounded-xl max-w-lg "
          >
            <input
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              type="text"
              className="flex-1 bg-transparent px-4 py-3 outline-none placeholder-black-500"
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

          <div className="absolute bottom-[-11rem] left-[-7rem] w-[185px] h-fit z-10">
            <Arrow color="#e2b8b1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
