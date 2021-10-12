import React from "react";
import { Row, Card } from "react-materialize";
import PropTypes from "prop-types";

export default function UserCard({ props }) {
  return (
    <Card>
      <Row>
        <img
          src={props.picture.medium}
          className="circle responsive-img"
          alt="avatar"
        />
      </Row>
      <Row className="blue-grey darken-2 white-text center-align">
        <h6>{props.name.first + " " + props.name.last}</h6>
        <p className="white blue-grey-text left-align ">
          <p>
            <i class="material-icons">email</i>
            {props.email}
          </p>
          <p>
            <i class="material-icons">phone</i>
            {props.cell}
          </p>
        </p>
      </Row>
    </Card>
  );
}

UserCard.propTypes = {
  name: {
    first: PropTypes.string,
    last: PropTypes.string,
  },
  email: PropTypes.string,
  cell: PropTypes.string,
  picture: {
    medium: PropTypes.string,
  },
};
