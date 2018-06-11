import React from 'react';
import PropTypes from 'prop-types';

const ViewMoreTile = props => (
  <p className={`${props.column} project-overlay`}> + {props.photoCount - 8} more</p>
);

ViewMoreTile.propTypes = {
  photoCount: PropTypes.number.isRequired,
  column: PropTypes.string.isRequired,
};

export default ViewMoreTile;
