import Img from "../tools/Img";
import Button from "../tools/Button";
import { noFormater } from "../tools/NumberFormater";
import Arrow from "../svgs/Arrow";
import Underline from "../svgs/Underline";

function Landing({ data, count }) {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute w-[45%] h-full right-0 top-0">
        <Img src="/assets/hero-background.jpg" alt="Hero image" />
      </div>

      <div className="absolute w-1/3 h-screen left-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          alt="pattern"
          className="opacity-50"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="container w-full h-full flex items-center">
        <div className="space-y-4 max-w-[600px]">
          <div className="space-y-4">
            <p className="tag">Hey welcome</p>
            <h1 className="font-bold ">
              Are you looking{" "}
              <span className="block">
                for <span className="text-skin-700">Collaboration?</span>
              </span>
            </h1>
            <div className="absolute -bottom-8 right-0 h-[100px] w-[380px]">
              <Underline color="#e2b8b1" />
            </div>
          </div>

          <p className="max-w-md">
            You are at right place. At Cados we are here to help you to find and
            collaborate with other developer advocates from many companies.
          </p>

          <div className="flex items-center gap-4 md:pt-4">
            <Button
              href="/register"
              text="Get started"
              design="bg-black-500 text-white w-full"
            />
            <Button
              href="/advocates"
              text="Find people"
              visible="hidden"
              design="text-white bg-skin-700 duration-200 w-full"
            />
          </div>
          <div className="absolute bottom-2 left-[-7rem] w-[200px] h-fit pointer-events-none">
            <Arrow color="#e2b8b1" />
          </div>
        </div>

        <div className="absolute w-fit h-fit bottom-0 flex items-center justify-start gap-2">
          <div className="flex items-center -space-x-4">
            {data.map((dp) => (
              <div
                key={dp.follower_count}
                className="w-10 h-10 rounded-full border-4 border-white overflow-hidden"
              >
                <Img src={dp.profile_pic} alt={dp.username} />
              </div>
            ))}
          </div>
          <p className="text-base">
            {noFormater(count)}+ people already there. Join today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
