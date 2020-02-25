import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotFound = props => {
  return(
    <div>
      <h1>404 Page Not Found</h1>
      <p>Unfortunately, the page, {props.location.pathname}, does not exist!</p>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;