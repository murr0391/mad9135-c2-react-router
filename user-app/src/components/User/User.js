import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function User({ findUser }) {
  // console.log(props.match.params.id);
  // props.location   props.history
  // props.findPlanet() - function in Planets.js to search state array
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setUser(findUser(id));
  }, [findUser, id]);

  return (
    <>
      <p>This is the planet details page.</p>
      <p>Id: {id}</p>
      <p>Name: {user && user.name}</p>
      <p>Terrain: {user && user.terrain}</p>
    </>
  );
}

User.propTypes = {
  findUser: PropTypes.func.isRequired,
};
