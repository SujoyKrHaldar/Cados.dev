import Link from "next/link";
import Img from "../tools/Img";
import { BsArrowRight } from "react-icons/bs";

function ProfileCard({ data, className = "" }) {
  return (
    <div
      className={`group w-full h-full overflow-hidden p-1
     shadow-md lg:hover:shadow-xl lg:hover:scale-105 bg-white
    flex flex-col ${className}`}
    >
      <div
        className="w-full h-[260px] bg-black-500 
       overflow-hidden rounded-md"
      >
        <Img
          src={data.profile_pic}
          alt={data.name}
          className="opacity-80 lg:group-hover:scale-105 duration-100"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-2 h-full pt-4 pb-2 px-2">
        <div className="">
          <p className="text-base text-gray-500">{data.name}</p>
          <p className="text-xl font-thin">
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
