import { Navbar, Row } from "react-materialize";
import { NavLink } from "react-router-dom";
export default function Navigation(props) {
  return (
    <Row>
    <Navbar className="pink darken-2">
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/addresses">
        Addresses
      </NavLink>

    </Navbar>
        </Row>
  );
}
