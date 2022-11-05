import ProfileCard from "../design/ProfileCard";
import { useRouter } from "next/router";
import { useState } from "react";

function Search({ user }) {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.name);

  const handelSubmit = (e) => {
    e.preventDefault();
    const searchQuery = query.trim().replaceAll(" ", "+");
    router.push(`/search?name=${searchQuery}`);
  };

  return (
    <section className="container py-32">
      <form className="p-8" onSubmit={handelSubmit}>
        <input
          type="text"
          className="p-4 border border-black"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Find new people"
        />
      </form>

      {user.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {user.map((dev) => (
            <ProfileCard data={dev} />
          ))}
        </div>
      ) : (
        <h2>No user found</h2>
      )}
    </section>
  );
}

export default Search;
