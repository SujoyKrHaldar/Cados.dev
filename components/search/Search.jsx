import ProfileCard from "../design/ProfileCard";
import { BiSearch } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { useState } from "react";
import Img from "../tools/Img";

function Search({ user }) {
  const router = useRouter();
  const { name } = router.query;
  const [searchQuery, setSearchQuery] = useState(name);

  const handelSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().replaceAll(" ", "+");
    searchQuery === ""
      ? router.push(`/search`)
      : router.push(`/search?name=${query}`);
  };

  return (
    <section className="pb-16 pt-48 w-full h-full min-h-[92vh] ">
      <div className="absolute w-1/3 h-screen left-0 top-0">
        <Img src="/assets/patternpad-hero.svg" className="opacity-50 " />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      {user.length > 0 && (
        <div className="absolute w-full h-1/2 bg-brown-200 bottom-0 left-0"></div>
      )}

      <div className="container w-full h-full flex flex-col justify-center">
        <div className="space-y-4">
          <p className="tag">Find new peers</p>
          <form
            className="flex items-center gap-4 justify-between"
            onSubmit={handelSubmit}
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl text-gray-400">
                <BiSearch />
              </div>
              <input
                type="text"
                className="outline-none
                bg-transparent text-5xl font-semibold placeholder:font-thin"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="What are you looking ..."
              />
            </div>
            {searchQuery && (
              <div
                onClick={() => setSearchQuery("")}
                className="text-3xl p-2 bg-gray-200 w-fit cursor-pointer rounded-full"
              >
                <GrFormClose />
              </div>
            )}
          </form>
        </div>

        <div className="pt-4">
          {name && user.length === 0 && <p>No peers found.</p>}
          {user.length > 0 && (
            <div className="space-y-4">
              <p className="font-thin">
                <span className="font-semibold">Search result</span> -{" "}
                {user.length} profile found.
              </p>
              <div className="grid grid-cols-4 gap-4">
                {user.map((dev) => (
                  <ProfileCard data={dev} key={dev.follower_count} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
