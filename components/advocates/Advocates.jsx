import ProfileCard from "../design/ProfileCard";

function Advocates({ error, data }) {
  return (
    <section className="container py-16 overflow-hidden bg-gray-200">
      {error && <h1>Error</h1>}
      {data && !error ? (
        <div className="space-y-2">
          <p className="tag">All Developers</p>
          <h2>
            <span className="font-bold">People</span> who are Enjoying.
          </h2>

          <div className="grid grid-cols-4 gap-4 pt-4">
            {data.map((data) => (
              <ProfileCard data={data} key={data.follower_count} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
}

export default Advocates;
