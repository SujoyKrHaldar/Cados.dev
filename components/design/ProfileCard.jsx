import Link from "next/link";
import Img from "../tools/Img";

function ProfileCard({ data }) {
  console.log(data.username);
  return (
    <div className="border border-black p-2">
      <div className="w-full h-[300px] overflow-hidden">
        <Img src={data.profile_pic} alt={data.name} />
      </div>
      <div className="p-2 pt-4 space-y-2">
        <p className="text-2xl">@{data.username}</p>
        <Link href={`/advocates/${data.username}`}>
          <a className="text-base">Visit profile</a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
