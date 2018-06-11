import React from 'react';
import PropTypes from 'prop-types';

const ViewMoreTile = props => (
  <a href={props.photoURL}>
    <p className={`${props.column} project-overlay`}> + {props.photoCount - 8} more</p>
  </a>
);

ViewMoreTile.propTypes = {
  photoCount: PropTypes.number.isRequired,
  photoURL: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
};

export default ViewMoreTile;
