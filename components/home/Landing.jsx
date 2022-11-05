import Img from "../tools/Img";
import Button from "../tools/Button";

function Landing() {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute w-[45%] h-full right-0 top-0">
        {/* <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white z-10"></div> */}
        <Img src="/assets/hero-background.jpg" position="" />
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
            Are you looking for <span className="">Collaboration?</span>
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

          <div className="absolute">
            <p>vsdvsdjhvdjsh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
