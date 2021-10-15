import React from 'react'
import { Row, Card } from 'react-materialize'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function UserCard ({ props }) {
  const hrefString = '/user/' + props.id
  return (
    <Card>
      <Row>
        <div class='card-image center-self'>
          <img
            src={props.picture.medium}
            className='circle responsive-img'
            alt='avatar'
          />
        </div>
      </Row>
      <Row className='white blue-grey-text center-align'>
        <h5>
          <NavLink to={hrefString}>
            <i class='material-icons'>zoom_in</i>
            {props.name.first + ' ' + props.name.last}
          </NavLink>
        </h5>
        <p className='white blue-grey-text left-align '>
          <p class='email'>
            <i class='material-icons'>email</i>
            {props.email}
          </p>
          <p>
            <i class='material-icons'>phone</i>
            <span>{props.cell}</span>
          </p>
        </p>
      </Row>
    </Card>
  )
}

UserCard.propTypes = {
  name: {
    first: PropTypes.string,
    last: PropTypes.string
  },
  email: PropTypes.string,
  cell: PropTypes.string,
  picture: {
    medium: PropTypes.string
  },
  index: PropTypes.number
}
