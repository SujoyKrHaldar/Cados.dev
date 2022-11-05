import Link from "next/link";
import Img from "../tools/Img";

function ProfileCard({ data }) {
  return (
    <div
      className="w-full h-full overflow-hidden rounded-lg p-3 
    border-2 border-white lg:hover:border-black-500 bg-white"
    >
      <div className="w-full h-[260px] bg-black-500 grayscale-0 hover:grayscale rounded-md">
        <Img src={data.profile_pic} alt={data.name} className="opacity-80" />
      </div>
      <div className="space-y-1 pt-4 px-2">
        <p className="text-2xl font-medium first-letter:uppercase">
          {data.username}
        </p>
        <Link href={`/advocates/${data.username}`}>
          <a
            className="text-base text-black 
          lg:text-gray-400 lg:hover:text-black"
          >
            Visit profile
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
