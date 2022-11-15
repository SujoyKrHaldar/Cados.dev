import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function SearchPagination({ pagination }) {
  const { query } = useRouter();
  return (
    <>
      <div className="flex items-center gap-3">
        {/* Previous page */}
        {pagination.has_previous && (
          <Link
            href={
              pagination.prev_page === 1
                ? `/search?keyword=${query.keyword}`
                : `/search?keyword=${query.keyword}&page=${pagination?.prev_page}`
            }
          >
            <div
              className="p-3 py-2 pr-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500"
            >
              <RiArrowLeftSLine />
              <p className="md:text-base ">Previous</p>
            </div>
          </Link>
        )}
        {/* First page */}
        {pagination.has_previous && (
          <Link href={`/search?keyword=${query.keyword}`}>
            <div
              className="p-3 py-2 pr-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500 "
            >
              <RiArrowLeftSLine />
              <p className="md:text-base ">First</p>
            </div>
          </Link>
        )}

        {/* Page list */}
        <div className="hidden xl:flex items-center gap-2">
          {pagination.pages.map((page) => (
            <Link
              key={page}
              href={
                page === 1
                  ? `/search?keyword=${query.keyword}`
                  : `/search?keyword=${query.keyword}&page=${page}`
              }
            >
              <p
                className={`md:text-base p-3 py-2 rounded-md cursor-pointer
               bg-white lg:hover:border-gray-500 
               
                ${
                  query.page == page
                    ? "border-2 border-skin-700"
                    : "border border-transparent"
                }`}
              >
                {page}
              </p>
            </Link>
          ))}
        </div>

        {/* End page */}
        {pagination.has_next && (
          <Link
            href={`/search?keyword=${query.keyword}&page=${pagination.total_pages}`}
          >
            <div
              className="p-3 py-2 pl-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500  "
            >
              <p className="md:text-base ">End</p>
              <RiArrowRightSLine />
            </div>
          </Link>
        )}
        {/* Next page */}
        {pagination.has_next && (
          <Link
            href={`/search?keyword=${query.keyword}&page=${pagination?.next_page}`}
          >
            <div
              className="p-3 py-2 pl-5 lg:hover:shadow-lg bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500 "
            >
              <p className="md:text-base ">Next</p>
              <RiArrowRightSLine />
            </div>
          </Link>
        )}
      </div>

      <div className="space-y-3 xl:hidden">
        <p>Navigate through pages</p>
        <div className="flex flex-wrap items-center gap-2">
          {pagination.pages.map((page) => (
            <Link
              key={page}
              href={
                page === 1
                  ? `/search?keyword=${query.keyword}`
                  : `/search?keyword=${query.keyword}&page=${page}`
              }
            >
              <p
                className={`md:text-base p-3 py-2 rounded-md cursor-pointer
               bg-white lg:hover:border-gray-500 
               
                ${
                  query.page == page
                    ? "border-2 border-skin-700"
                    : "border border-transparent"
                }`}
              >
                {page}
              </p>
            </Link>
          ))}
        </div>
        <div className=" md:flex items-center justify-between gap-4">
          {query.page && <p>Currently at page no. {query.page}</p>}

          <p>Total pages: {pagination.total_pages}</p>
        </div>
      </div>
    </>
  );
}

export default SearchPagination;
