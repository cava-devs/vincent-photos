import React from 'react';
import PropTypes from 'prop-types';


const ViewMore = props => (
  <button className="view-more" src={props.photoURL} onClick={props.onClick}>View more</button>
);

ViewMore.propTypes = {
  photoURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ViewMore;
