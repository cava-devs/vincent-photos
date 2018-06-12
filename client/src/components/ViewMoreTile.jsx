import React from 'react';
import PropTypes from 'prop-types';

const ViewMoreTile = props => (
  <button src={props.photoURL} onClick={props.onClick}>
    <p className={`${props.column} project-overlay`}> + {props.photoCount - 8} more</p>
  </button>
);

ViewMoreTile.propTypes = {
  photoCount: PropTypes.number.isRequired,
  photoURL: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ViewMoreTile;
