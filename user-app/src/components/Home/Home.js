import PropTypes from 'prop-types'
//used to be part of react... now its own module
/*
        The REQUIRED props isAlive and anything are being passed to this
        component. In App.js you can remove these to see the generated errors.
*/

export default function Home (props) {
  return (
    <div className='home left-align'>

      <p>
        This responsive web application permits you to view user information via cards or an
        address list. If you click on the username in the card, you will get
        some detailed information about the user.
      </p>
      <p>
        You can also use the browser's address bar to navigate through this application.
      </p>
      <p>Available endpoints are /, /users, /user/:id, /addresses</p>
      <p>I wanted to use /users/:id but I could not get it working</p>
    </div>
  )
}

//add PropTypes
Home.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  findPlanet: PropTypes.func,
  isAlive: PropTypes.bool.isRequired,
  anything: PropTypes.any.isRequired,
  myobj: PropTypes.shape({
    email: PropTypes.string,
    age: PropTypes.number
  }),
  greet: PropTypes.oneOf(['hello', 'goodbye']),
  something: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
