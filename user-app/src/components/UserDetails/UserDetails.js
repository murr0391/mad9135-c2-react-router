import React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Card } from 'react-materialize'
//import PropTypes from "prop-types";

export default function UserDetails ({ props }) {
  //let index = 2;
  let { id } = useParams()
  let userProp = props[id]
  //          <p>{`${userProp.location.street.number} ${props.location.street.name}`}</p>
  return (
    <>
      <Row>
        <div class='center-self'>
          <img
            src={userProp.picture.large}
            className='responsive-img'
            alt='avatar'
          />
        </div>
      </Row>
      <Row className='white blue-grey-text center-align'>
        <h5>{userProp.name.first + ' ' + userProp.name.last}</h5>
        <p className='white blue-grey-text left-align '>
          <div class='user-address'>
            <p>
              <h>Email:</h> {userProp.email}
            </p>
            <p>Phone: {userProp.cell}</p>
          </div>
          <h6>Mailing address:</h6>
          <div class='user-address'>
            <p>{`${userProp.name.title} ${userProp.name.first} ${userProp.name.last}`}</p>
            <p>{`${userProp.location.street.number} ${userProp.location.street.name}`}</p>
            <p>{`${userProp.location.city} ${userProp.location.state}`}</p>
            <p>{`${userProp.location.country} ${userProp.location.postcode}`}</p>
          </div>
          <h6>User Application Identifiers:</h6>
          <div class='user-address'>
            <p>
              <h>Username:</h> {userProp.login.username}
            </p>
            <p>
              <h>Password:</h> {userProp.login.password}
            </p>
          </div>
          <p>
            <h>UUID:</h> {userProp.login.uuid}
          </p>
        </p>
      </Row>
    </>
  )
}
/*
UserDetails.propTypes = {
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
*/
