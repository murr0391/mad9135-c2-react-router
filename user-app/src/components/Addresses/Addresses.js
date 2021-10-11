import { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import User from '../User/User';
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
  function findUser(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
    //return an object for the single planet
  }
  return (
    <div className="planets">
      {list.length === 0 && <p>Loading...</p>}
      <div className="planet-list">
        {list.map((item, index) => (
          <p key={item.name}>
            <NavLink to={`/addresses/${index + 1}`}>{item.name}</NavLink>
            <span>{item.terrain}</span>
          </p>
        ))}
      </div>

      <div className="planet-details">
        <Route path="/addresses/:id">
          <User findUser={findUser} />
        </Route>
      </div>
    </div>
  );
}
