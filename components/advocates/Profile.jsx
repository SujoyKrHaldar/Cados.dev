import Link from "next/link";
import Img from "../tools/Img";
import { AiOutlineTwitter } from "react-icons/ai";

function nFormatter(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

function Profile({ user, others }) {
  return (
    <section className="container py-36">
      <div className="absolute w-[96%] mx-auto h-[220px] top-0 inset-x-0 bg-gray-100 rounded-3xl"></div>
      <div className="flex items-end gap-8">
        <div
          className="flex-0 w-[220px] h-[260px] bg-white overflow-hidden 
        rounded-xl border-8 border-white"
        >
          <Img
            src={user.profile_pic}
            alt={user.name}
            position="top"
            className="overflow-hidden rounded-xl"
          />
        </div>
        <div className="flex-1 py-6 flex items-end gap-2 justify-between w-full">
          <div className="space-y-1">
            <p className="font-bold text-4xl">{user.name}</p>
            <p className="text-2xl">@{user.username}</p>
            <div className="flex items-center gap-1 pt-3">
              <div className="flex  items-center -space-x-3">
                {others
                  .filter((dp) => dp.follower_count != user.follower_count)
                  .slice(0, 4)
                  .map((dp) => (
                    <img
                      className="w-8 h-8 rounded-full border-4 border-white"
                      src={dp.profile_pic}
                      alt={dp.username}
                    />
                  ))}
              </div>
              <p className="font-bold text-lg">
                <span>+ {nFormatter(user.follower_count)} </span>
                Followers
              </p>
            </div>
          </div>

          <Link href={user.twitter}>
            <a
              className="px-5 py-2 bg-blue-500 rounded-lg text-white w-fit
            flex items-center gap-3 lg:hover:bg-blue-600"
            >
              <div className="text-xl">
                <AiOutlineTwitter />
              </div>
              <p className="text-lg">Follow </p>
            </a>
          </Link>
        </div>
      </div>
      <div className="py-6 px-3 max-w-3xl space-y-2">
        <p className="text-3xl font-bold">About me</p>
        <p className="text-gray-600">{user.bio}</p>
      </div>
    </section>
  );
}

export default Profile;
