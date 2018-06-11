import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <a href={props.photo.url}>
    <img className={`${props.column} img-fluid zoom`} alt="" src={props.photo.url} />
  </a>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  column: PropTypes.string.isRequired,
};

export default Photo;
