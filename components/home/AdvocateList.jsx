import ProfileCard from "../design/ProfileCard";
import Button from "../tools/Button";

function AdvocateList({ data }) {
  return (
    <section className="pt-16 pb-32 w-full h-auto bg-white">
      <div className="absolute w-[95%] h-[60%] right-0 top-0 bg-gradient-to-br from-skin-200 to-skin-500"></div>

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

            <div className="flex items-center gap-4">
              {data.map((dev) => (
                <ProfileCard
                  key={dev.follower_count}
                  data={dev}
                  className="even:translate-y-5 shadow-none 
                  border-b-4 border-2 border-skin-500 border-b-skin-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvocateList;
