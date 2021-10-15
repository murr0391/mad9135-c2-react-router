import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
export default function AddressRow ({ props }) {
  const hrefString = '/user/' + props.id
  return (
    <tr>
      <td>
        <NavLink to={hrefString}>{props.name.last}</NavLink>
      </td>
      <td>{props.name.first}</td>
      <td>{props.location.country}</td>
      <td>{props.location.state}</td>
      <td>{props.location.city}</td>
      <td>{`${props.location.street.number} ${props.location.street.name}`}</td>
      <td>{props.location.postcode}</td>
    </tr>
  )
}

AddressRow.propTypes = {
  name: {
    first: PropTypes.string,
    last: PropTypes.string
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
}
