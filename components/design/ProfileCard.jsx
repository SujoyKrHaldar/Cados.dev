import Link from "next/link";
import Img from "../tools/Img";

function ProfileCard({ data }) {
  return (
    <div className="w-full h-[340px] overflow-hidden rounded-lg p-4 flex items-end">
      <div className="absolute inset-0 w-full h-full bg-black-500 grayscale-0 hover:grayscale">
        <Img src={data.profile_pic} alt={data.name} className="opacity-60" />
      </div>
      <div className="space-y-1 text-white">
        <p className="text-2xl font-bold first-letter:uppercase">
          {data.username}
        </p>
        <Link href={`/advocates/${data.username}`}>
          <a className="text-base">Visit profile</a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
