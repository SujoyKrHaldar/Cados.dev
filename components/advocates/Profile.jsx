import Link from "next/link";
import Img from "../tools/Img";
import { AiOutlineTwitter } from "react-icons/ai";
import { noFormater } from "../tools/NumberFormater";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/router";

function Profile({ user, others }) {
  const router = useRouter();
  return (
    <section className="pt-36 pb-16">
      <div className="absolute w-full h-[180px] lg:h-[240px] inset-0 bg-skin-200">
        <div className="absolute w-1/3 h-full left-0 top-0">
          <Img
            src="/assets/patternpad-hero.svg"
            alt="pattern"
            position="top"
            className="opacity-50"
          />
          <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-skin-200 "></div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-skin-200 "></div>
        </div>
      </div>

      <div className="container">
        <div className="flex items-end gap-8 mb-8">
          <div
            className="flex-0 w-[180px] h-[180px] md:w-[230px] md:h-[270px] bg-white overflow-hidden 
          rounded-full md:rounded-3xl border-8 border-white shadow-md shadow-brown-200"
          >
            <Img
              src={user.profile_pic}
              alt={user.name}
              position="top"
              className="overflow-hidden rounded-2xl"
            />
          </div>

          <div
            className="flex-1 py-6 space-y-4 lg:space-y-0 lg:flex 
          items-start gap-2 justify-between w-full"
          >
            <div className="space-y-1">
              <p className="font-bold text-4xl first-letter:uppercase">
                {user.name}
              </p>
              <p className="font-thin text-xl">@{user.username}</p>
              <div className="flex items-center gap-1 pt-3">
                <div className="flex items-center -space-x-3">
                  {others
                    .filter((dp) => dp.follower_count != user.follower_count)
                    .map((dp) => (
                      <div
                        key={dp.follower_count}
                        className="w-8 h-8 rounded-full border-4 border-white shadow-md overflow-hidden"
                      >
                        <Img src={dp.profile_pic} alt={dp.username} />
                      </div>
                    ))}
                </div>
                <p className="font-semibold text-lg">
                  <span>+ {noFormater(user.follower_count)} </span>
                  Followers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div
                onClick={() => router.back()}
                className="p-3 py-2 pr-5 bg-gray-200 rounded-md w-fit
                flex items-center gap-1 cursor-pointer lg:hover:bg-gray-300"
              >
                <RiArrowLeftSLine />
                <p className="text-base"> Go back</p>
              </div>

              {user?.twitter && (
                <Link href={user.twitter}>
                  <a
                    target="_blank"
                    className="p-3 py-2 pr-4 bg-blue-500 rounded-md text-white w-fit
                  flex items-center gap-1 lg:hover:bg-blue-600"
                  >
                    <AiOutlineTwitter />
                    <p className="text-base">Follow </p>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="lg:p-8 lg:bg-gray-200 lg:rounded-2xl max-w-lg md:max-w-xl space-y-2">
          <p className="text-3xl font-bold">Bio</p>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
