import ProfileCard from "../design/ProfileCard";
import ProfileCardX from "../design/ProfileCardX";
import Pagination from "../tools/Pagination";

function Advocates({ data, pagination }) {
  return (
    <section id="all-developers" className="py-16 overflow-hidden bg-white">
      <div className="absolute w-full lg:w-[95%] h-full right-0 top-0 bg-skin-200"></div>

      <div className="container w-full h-full space-y-10">
        <div className="space-y-2">
          <p className="tag">All Developers</p>
          <h2>
            <span className="font-bold">People</span> who are Enjoying.
          </h2>

          <div className="hidden md:grid  grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {data.map((data, index) => (
              <ProfileCard data={data} key={data?.id || index} />
            ))}
          </div>

          <div className="space-y-4 md:hidden pt-4">
            {data.map((data, index) => (
              <ProfileCardX data={data} key={data?.id || index} />
            ))}
          </div>
        </div>
        <Pagination pagination={pagination} />
      </div>
    </section>
  );
}

export default Advocates;
