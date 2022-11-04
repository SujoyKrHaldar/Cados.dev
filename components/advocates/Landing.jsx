import { useState } from "react";
import { useRouter } from "next/router";

function Landing() {
  const [searchedQuery, setSearchedQuery] = useState("");
  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchedQuery.trim().replaceAll(" ", "+");
    router.push(`/search?name=${searchQuery}`);
  };
  return (
    <section className="py-32 w-full h-auto">
      {/* <div className="absolute w-1/2 h-full right-0 top-0">
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-b from-white z-10"></div>
        <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white z-10"></div>
        <Img src="/assets/hero-background.jpg" position="bottom right" />
      </div>

      <div className="absolute w-1/3 h-full left-0 top-0">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img src="/assets/patternpad-hero.svg" className="opacity-50" />
      </div> */}

      <div className="container w-full h-full flex items-center z-10">
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <p className="tag">Discover peoples</p>
          <h2 className="font-bold">
            The
            <span className=""> Platform </span> for all developers.
          </h2>
          <form
            onSubmit={handelSubmit}
            className="border border-black rounded-lg"
          >
            <input
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              type="text"
              className="px-4 py-3 outline-none"
              placeholder="Find your next collaborator"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Landing;
