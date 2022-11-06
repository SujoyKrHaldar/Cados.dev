import Link from "next/link";
import Img from "../tools/Img";
import { AiOutlineTwitter } from "react-icons/ai";
import { noFormater } from "../tools/NumberFormater";

function Profile({ user, others }) {
  return (
    <section className="pt-40 pb-16">
      <div className="absolute w-[96%] mx-auto h-[225px] top-4 inset-x-0 bg-gray-200 rounded-3xl"></div>

      <div className="container">
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
              <p className="font-bold text-4xl first-letter:uppercase">
                {user.name}
              </p>
              <p className="text-2xl">@{user.username}</p>
              <div className="flex items-center gap-1 pt-3">
                <div className="flex  items-center -space-x-3">
                  {others
                    .filter((dp) => dp.follower_count != user.follower_count)
                    .slice(0, 4)
                    .map((dp) => (
                      <div
                        key={dp.follower_count}
                        className="w-8 h-8 rounded-full border-4 border-white overflow-hidden"
                      >
                        <Img src={dp.profile_pic} alt={dp.username} />
                      </div>
                    ))}
                </div>
                <p className="font-bold text-lg">
                  <span>+ {noFormater(user.follower_count)} </span>
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
        <div className="py-6 px-3 max-w-xl space-y-2">
          <p className="text-3xl font-bold">Bio</p>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
