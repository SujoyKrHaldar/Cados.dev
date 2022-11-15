import ProfileCard from "../design/ProfileCard";
import ProfileCardX from "../design/ProfileCardX";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useState } from "react";
import Img from "../tools/Img";
import SearchPagination from "../tools/SearchPagination";

function Search({ user, pagination }) {
  const router = useRouter();
  const { keyword } = router.query;
  const [searchQuery, setSearchQuery] = useState(keyword);

  const handelSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().replaceAll(" ", "+");
    searchQuery === ""
      ? router.push(`/search`)
      : router.push(`/search?keyword=${query}`);
  };

  return (
    <section className="pt-48 w-full h-full min-h-[100vh] ">
      <div className="absolute w-1/3 h-screen left-0 top-0">
        <Img src="/assets/patternpad-hero.svg" className="opacity-50 " />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="container w-full h-full space-y-4">
        <p className="tag">Find new peers</p>
        <form className="flex items-center gap-4" onSubmit={handelSubmit}>
          <div className="flex items-center gap-3">
            {searchQuery ? (
              <div
                onClick={() => setSearchQuery("")}
                className="cursor-pointer text-3xl p-2 bg-gray-200 rounded-md"
              >
                <IoClose />
              </div>
            ) : (
              <div className="text-4xl text-gray-400">
                <BiSearch />
              </div>
            )}
            <input
              type="text"
              className="outline-none bg-transparent text-5xl font-semibold placeholder:font-thin"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="What are you looking ..."
            />
          </div>
        </form>
      </div>

      {keyword && user.length === 0 && (
        <div className="container pt-4">
          <p>No peers found.</p>
        </div>
      )}

      {user.length > 0 && (
        <div className="w-full h-full pt-4 pb-16">
          <div className="absolute w-full h-1/3 bottom-0 left-0 bg-skin-200"></div>
          <div className="container space-y-10">
            {user.length > 0 && (
              <div className="space-y-4">
                <p className="font-thin">
                  <span className="font-semibold">Search result</span> - Total{" "}
                  <span className="font-semibold">
                    {pagination.results_found}
                  </span>{" "}
                  profile found.
                </p>
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {user.map((dev) => (
                    <ProfileCard
                      data={dev}
                      key={dev.follower_count}
                      className="shadow-none 
                      border border-black-500"
                    />
                  ))}
                </div>
                <div className="md:hidden space-y-4">
                  {user.map((dev, index) => (
                    <ProfileCardX key={dev?.id || index} data={dev} />
                  ))}
                </div>
              </div>
            )}
            {pagination.pages.length > 1 && (
              <SearchPagination pagination={pagination} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Search;
