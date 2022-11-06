import Img from "../tools/Img";
import Button from "../tools/Button";
import Link from "next/link";
import { noFormater } from "../tools/NumberFormater";

function Landing({ data, count }) {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute w-[45%] h-full right-0 top-0">
        <Img src="/assets/hero-background.jpg" />
      </div>

      <div className="absolute w-1/3 h-full left-0 top-0">
        <Img
          src="/assets/patternpad-hero.svg"
          className="opacity-50 grayscale"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white "></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white "></div>
      </div>

      <div className="container w-full h-full flex items-center">
        <div className="space-y-4 max-w-[600px]">
          <p className="tag">Hey welcome</p>
          <h1 className="font-bold ">
            Are you looking <span className="block">for Collaboration?</span>
          </h1>

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
              design="text-black bg-gray-100 duration-200 w-full"
            />
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
            {noFormater(count)}+ people already there.{" "}
            <Link href="/register">
              <a className="text-base font-bold">Join today.</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
