import Link from "next/link";
import Img from "../tools/Img";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function ProfileCard({ data, className = "" }) {
  return (
    <div
      className={`group w-full h-full overflow-hidden p-1
     shadow-md lg:hover:shadow-xl lg:hover:scale-105 bg-white
    flex flex-col ${className}`}
    >
      {data.twitter && (
        <Link href={data.twitter}>
          <a
            target="_blank"
            className="hidden absolute top-4 right-4 p-1 bg-white rounded-full w-fit text-xl
                  md:flex items-center text-blue-500 z-10"
          >
            <AiOutlineTwitter />
          </a>
        </Link>
      )}

      <div
        className="w-full h-[142px] md:h-[240px] lg:h-[190px] xl:h-[260px] bg-black-500
       overflow-hidden rounded-md"
      >
        <Img
          src={data.profile_pic}
          alt={data.name}
          position="top"
          className="opacity-80 lg:group-hover:scale-105 duration-100"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-2 h-full pt-4 pb-2 px-2">
        <div>
          <p className="text-base text-gray-500">{data.name}</p>
          <p className="md:text-xl font-thin">
            @
            <span className="font-semibold first-letter:uppercase">
              {data.username}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link href={`/advocates/${data.username}`}>
            <a
              className="text-base text-black 
          lg:text-gray-400 lg:hover:text-black"
            >
              Visit profile
            </a>
          </Link>

          <div className="text-black lg:text-gray-400 lg:group-hover:text-black duration-75">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
