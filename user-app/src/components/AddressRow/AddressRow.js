import React from "react";
import PropTypes from "prop-types";
export default function AddressRow({ props }) {
  return (
    <tr>
      <td>{props.name.last}</td>
      <td>{props.name.first}</td>
      <td>{props.location.country}</td>
      <td>{props.location.state}</td>
      <td>{props.location.city}</td>
      <td>{`${props.location.street.number} ${props.location.street.name}`}</td>
      <td>{props.location.postcode}</td>
    </tr>
  );
}

AddressRow.propTypes = {
  name: {
    first: PropTypes.string,
    last: PropTypes.string,
  },
  location: {
    country: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    postcode: PropTypes.string,
    street: {
      number: PropTypes.number,
      name: PropTypes.string
    }
  }
};
