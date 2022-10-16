import Img from "../tools/Img";
import Button from "../tools/Button";

function Landing() {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute w-1/2 h-full right-0 top-0">
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-b from-white z-10"></div>
        <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white z-10"></div>
        <Img src="/assets/hero-background.jpg" position="bottom right" />
      </div>

      <div className="absolute w-1/3 h-full left-0 top-0">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img src="/assets/patternpad-hero.svg" className="opacity-50" />
      </div>

      <div className="container w-full h-full flex items-center z-10">
        <div className="space-y-6 max-w-3xl">
          <p className="tag">Are you looking for</p>
          <h1>
            <span className="font-bold block"> Collaboration ?</span> you are at
            right place.
          </h1>

          <p className="max-w-md">
            At Cados we are here to help you to find and collaborate with other
            developer advocates from many companies.
          </p>

          <div className="flex items-center gap-2 md:pt-4">
            <Button
              href="/register"
              text="Get started"
              visible="hidden"
              design="bg-black-500 text-white "
            />
            <Button
              href="/advocates"
              text="Discover people"
              visible="hidden"
              design="text-black duration-200 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
