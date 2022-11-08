import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function Pagination({ pagination }) {
  const { query } = useRouter();

  return (
    <div className="flex items-center gap-3">
      {/* Previous page */}
      {pagination.has_previous && (
        <Link
          href={
            pagination.prev_page === 1
              ? "/advocates"
              : `/advocates?page=${pagination?.prev_page}`
          }
        >
          <div
            className="p-3 py-2 pr-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500"
          >
            <RiArrowLeftSLine />
            <p className="text-base ">Previous</p>
          </div>
        </Link>
      )}
      {/* First page */}
      {pagination.has_previous && (
        <Link href="/advocates">
          <div
            className="p-3 py-2 pr-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500 "
          >
            <RiArrowLeftSLine />
            <p className="text-base ">First</p>
          </div>
        </Link>
      )}
      {/* Page list */}
      <div className="flex items-center gap-2">
        {pagination.pages.map((page) => (
          <Link
            key={page}
            href={page === 1 ? "/advocates" : `/advocates?page=${page}`}
          >
            <p
              className={`text-base p-3 py-2 rounded-md cursor-pointer
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
        <Link href={`/advocates?page=${pagination.total_pages}`}>
          <div
            className="p-3 py-2 pl-5 bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500  "
          >
            <p className="text-base ">End</p>
            <RiArrowRightSLine />
          </div>
        </Link>
      )}
      {/* Next page */}
      {pagination.has_next && (
        <Link href={`/advocates?page=${pagination?.next_page}`}>
          <div
            className="p-3 py-2 pl-5 lg:hover:shadow-lg bg-white rounded-md 
          flex items-center gap-1 cursor-pointer border border-transparent lg:hover:border-gray-500 "
          >
            <p className="text-base ">Next</p>
            <RiArrowRightSLine />
          </div>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
