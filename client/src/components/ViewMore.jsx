import React from 'react';
import PropTypes from 'prop-types';


const ViewMore = props => (
  <a className="view-more" href={props.photoURL}>View more</a>
);

ViewMore.propTypes = {
  photoURL: PropTypes.string.isRequired,
};

export default ViewMore;
