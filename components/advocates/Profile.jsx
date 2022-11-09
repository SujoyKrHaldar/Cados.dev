import Img from "../tools/Img";
import { AiOutlineTwitter } from "react-icons/ai";
import { noFormater } from "../tools/NumberFormater";
import Button from "../tools/Button";

function Profile({ user, others }) {
  return (
    <section className="py-36">
      <div className="absolute w-full h-[180px] lg:h-[240px] inset-0 bg-skin-200 overflow-hidden">
        <div className="absolute w-full md:w-1/3 h-screen left-0 top-0">
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
        <div className="md:flex items-end gap-8 mb-8">
          <div
            className="flex-0 w-[150px] h-[150px] md:w-[230px] md:h-[270px] bg-white overflow-hidden 
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
              <p className="font-bold text-4xl md:text-3xl first-letter:uppercase">
                {user.name}
              </p>
              <p className="font-thin text-2xl md:text-xl">@{user.username}</p>
              <div className="flex items-center gap-2 pt-3">
                <div className="flex items-center -space-x-3">
                  {others
                    .filter((dp) => dp.follower_count != user.follower_count)
                    .map((dp) => (
                      <div
                        key={dp.follower_count}
                        className="w-11 h-11 lg:w-8 lg:h-8 rounded-full border-4 border-white shadow-md overflow-hidden"
                      >
                        <Img src={dp.profile_pic} alt={dp.username} />
                      </div>
                    ))}
                </div>
                <p className="font-semibold text-2xl md:text-lg">
                  <span> {noFormater(user.follower_count)} </span>
                  Followers
                </p>
              </div>
            </div>

            {user?.twitter && (
              <Button
                href={user.twitter}
                target="_blank"
                text="Follow"
                icon={<AiOutlineTwitter />}
                design="flex-row-reverse hidden lg:flex bg-blue-500 text-white lg:hover:bg-blue-600 duration-200 w-full"
              />
            )}
          </div>
        </div>

        <div className="lg:p-8 lg:bg-gray-200 lg:rounded-2xl max-w-lg md:max-w-xl space-y-2">
          <p className="text-3xl font-bold">Bio</p>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {user?.twitter && (
          <Button
            href={user.twitter}
            target="_blank"
            text="Follow on Twitter"
            icon={<AiOutlineTwitter />}
            design="flex-row-reverse mt-8 lg:hidden flex bg-blue-500 text-white lg:hover:bg-blue-600 duration-200 w-full"
          />
        )}
      </div>
    </section>
  );
}

export default Profile;
