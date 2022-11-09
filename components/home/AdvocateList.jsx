import ProfileCard from "../design/ProfileCard";
import ProfileCardX from "../design/ProfileCardX";

import Button from "../tools/Button";

function AdvocateList({ data }) {
  return (
    <section className="py-16 w-full h-auto bg-white">
      <div className="absolute w-full lg:w-[95%] h-[60%] right-0 top-0 bg-gradient-to-br from-skin-200 to-skin-500"></div>

      <div className="container w-full h-full">
        <div className="space-y-6">
          <div className="space-y-2 max-w-md">
            <p className="tag">Discover peoples</p>
            <h2>
              You are not <span className="font-bold">Alone.</span> You have
              <span className="font-bold"> Peers.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Button
              href="/advocates#all-developers"
              text="Top developers"
              design="text-black bg-white w-full"
            />

            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((dev, index) => (
                <ProfileCard
                  key={dev?.id || index}
                  data={dev}
                  className=" shadow-none 
                  border-2 border-skin-700 md:last:hidden lg:last:block"
                />
              ))}
            </div> */}

            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((dev, index) => (
                <ProfileCard
                  key={dev?.id || index}
                  data={dev}
                  className=" shadow-none 
                  border-2 border-skin-700 md:last:hidden lg:last:block"
                />
              ))}
            </div>

            <div className="md:hidden space-y-4">
              {data.map((dev, index) => (
                <ProfileCardX key={dev?.id || index} data={dev} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvocateList;
