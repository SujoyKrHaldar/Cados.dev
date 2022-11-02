import Img from "../tools/Img";

function AdvocateList({ data }) {
  return (
    <section className="py-16 w-full h-auto">
      <div className="absolute w-[95%] h-full right-0 top-0 bg-secondary"></div>

      <div className="container w-full h-full">
        <div className="space-y-6">
          <div className="space-y-2 max-w-md">
            <p className="tag">Discover peoples</p>
            <h2 className="font-bold">You are not Alone.</h2>
            <h2>You have peers.</h2>
          </div>

          <div className="space-y-8">
            <p className="font-bold">Top developers</p>
            {/* design idea - https://dribbble.com/shots/18383615-Web-UI 
            https://dribbble.com/shots/18961380-BattlePeer-Web-Design
            https://dribbble.com/shots/18961562-BattlePeer-Web-Design*/}
            <div className="flex items-center gap-8">
              {data.map((dev) => (
                <div
                  key={dev.username}
                  className="w-[200px] text-center space-y-3"
                >
                  <div className="w-full h-[200px] overflow-hidden rounded-full">
                    <Img src={dev.profile_pic} alt={dev.name} />
                  </div>

                  <p>{dev.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvocateList;
