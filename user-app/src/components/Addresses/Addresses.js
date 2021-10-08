import { useState, useEffect } from "react";
export default function Addresses(props) {
  const [list, setList] = useState([]);
  //function addPlanet() {
  //  setList([...list, "Alderan"]);
  //}
  async function fetchData() {
    let url = "https://swapi.dev/api/planets";
    let resp = await fetch(url);
    let data = await resp.json();
    setList(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="planets">
      <p>This is the planets page</p>
      {list.length && <p>There are no planets yet</p>}
      {list.map((item) => (
        <p key={item.key}>{item.name + " " + item.terrain}</p>
      ))}
    </div>
  );
}
