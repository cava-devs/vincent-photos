import React from 'react';
import PropTypes from 'prop-types';


const ViewMore = props => (
  <button className="photo-view-more btn-viewmore" src={props.photoURL} onClick={props.onClick}>View more</button>
);

ViewMore.propTypes = {
  photoURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ViewMore;
