import { useState, useEffect } from "react";
export default function Users(props) {
  const [list, setList] = useState([]);
  const numberOfUsersToFetch = Math.floor(Math.random() * 17) + 16;

  async function fetchData() {
    let url = `https://randomuser.me/api/?nat=ca,us,au,nz,gb&seed=murr0391&format=json&results=${numberOfUsersToFetch}`;
    let resp = await fetch(url);
    let data = await resp.json();
    setList(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="users">
      <p>This is the users page</p>
      {!list.length && <p>There are no users yet</p>}
      {list.map((item) => (
        <p key={item.key}>
          {item.name.title +
            " " +
            item.name.first +
            " " +
            item.name.last +
            " " +
            item.email +
            " " +
            item.cell}
        </p>
      ))}
    </div>
  );
}
