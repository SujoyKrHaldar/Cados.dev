import ProfileCard from "../design/ProfileCard";

function OthersAdvocates({ data, existing }) {
  return (
    <section className="py-16 overflow-hidden bg-skin-200">
      <div className="container">
        <div className="space-y-2">
          <p className="tag">other Developers</p>
          <h2>
            <span className="font-bold">Visit</span> others.
          </h2>

          <div className="grid grid-cols-4 gap-4 pt-4">
            {data
              .filter((dp) => dp.follower_count != existing.follower_count)
              .map((data) => (
                <ProfileCard data={data} key={data.follower_count} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OthersAdvocates;
