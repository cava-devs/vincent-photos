import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div role="img" onClick={props.onClick}>
    <img className={`${props.column} img-fluid zoom`} alt="" src={props.photo.url} />
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  column: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Photo;
