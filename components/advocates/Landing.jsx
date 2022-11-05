import { useState } from "react";
import { useRouter } from "next/router";
import Img from "../tools/Img";
import Link from "next/link";

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
      <div className="absolute w-1/3 h-full right-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          className="opacity-50 grayscale"
        />
        <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white"></div>
        <div className="absolute w-full h-1/3 bottom-0 left-0 bg-gradient-to-t from-white"></div>
      </div>

      <div className="container w-full h-full flex items-center">
        <div className="space-y-4 max-w-xl">
          <p className="tag">Discover peoples</p>
          <h1 className="font-bold">The Platform for all Developers.</h1>
          <form
            onSubmit={handelSubmit}
            className="bg-gray-200 flex items-center justify-between gap-2
            py-1 px-2 rounded-xl max-w-lg border border-gray-400"
          >
            <input
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              type="text"
              className="flex-1 bg-transparent px-4 py-3 outline-none "
              placeholder="Find your next collaborator"
            />
            <input
              type="submit"
              value="Find people"
              className="py-2 px-5 text-base
                 bg-black-500 text-white rounded-lg cursor-pointer 
                 active:scale-95 duration-100 ease-in-out"
            />
          </form>
          <p className="font-thin">
            Totel {number} developers already registered.{" "}
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
