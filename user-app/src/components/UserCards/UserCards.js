import React from "react";
import { Row, Col } from "react-materialize";
import UserCard from "../UserCard/UserCard";
import PropTypes from "prop-types";
//import avatar from '../../assets/images/avatar.png';
export default function UserCards({ props }) {

  return (
    <Row>
      <Col s12 m6>
        {props && props.map((item) =>  <UserCard props={item}/>)}
      </Col>
    </Row>
  );
}

UserCard.propTypes = {
  list: PropTypes.array
};
