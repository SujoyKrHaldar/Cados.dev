import Link from "next/link";
import Img from "../tools/Img";
import { BsArrowRight } from "react-icons/bs";

function ProfileCardX({ data }) {
  return (
    <div
      className="group w-full h-full overflow-hidden p-2 bg-white rounded-2xl
    flex items-center gap-4 border-2 border-skin-700"
    >
      <div
        className="w-[80px] h-[80px] bg-black-500
       overflow-hidden rounded-xl"
      >
        <Img
          src={data.profile_pic}
          alt={data.name}
          position="top"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-2 h-full p-2">
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
            <a className="text-base text-black ">Visit profile</a>
          </Link>

          <div className="text-white p-2 bg-skin-700 rounded-lg">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardX;
