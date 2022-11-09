import { useState } from "react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Img from "../tools/Img";
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
    <section className="pt-16 lg:pt-48 pb-16 w-full h-[630px] lg:h-auto">
      <div className="absolute w-1/3 h-screen left-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          alt="pattern"
          className="opacity-50"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="absolute w-full max-w-[600px] h-[500px] lg:w-[40%] lg:h-full right-8 top-0 translate-y-10">
        <Img src="/assets/hero-image.png" alt="Hero image" position="top" />
        <div className=" lg:hidden absolute w-full h-[60%] bottom-0 left-0 bg-gradient-to-t from-white via-white "></div>
      </div>

      <div className="container w-full h-full flex items-end lg:items-center">
        <div className="space-y-4 max-w-xl">
          <div className="space-y-4">
            <p className="tag">Discover peoples</p>
            <h1 className="font-bold z-10">
              The Platform for all{" "}
              <span className="text-skin-700">Developers.</span>
            </h1>
            <div className="hidden lg:block absolute -bottom-2 -left-4 h-fit w-[380px] opacity-50">
              <Circle color="#e2b8b1" />
            </div>
          </div>

          <form
            onSubmit={handelSubmit}
            className="bg-skin-200 flex items-center justify-between gap-2
             py-1 px-2 rounded-2xl md:rounded-xl w-full md:max-w-lg "
          >
            <input
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              type="text"
              className="flex-1 bg-transparent px-6 md:px-4 py-5 md:py-3 outline-none 
              placeholder:text-black-500 placeholder:text-xl md:placeholder:text-base"
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

          <p className="font-thin ">
            Total <span className="font-semibold">{noFormater(number)}</span>{" "}
            developers already registered.
          </p>

          <div className="hidden lg:block absolute bottom-[-11rem] left-[-7rem] w-[185px] h-fit z-10">
            <Arrow color="#e2b8b1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
