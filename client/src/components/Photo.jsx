import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <a href={props.photo.url} data-toggle="lightbox" data-gallery="photo-gallery" data-type="image">
    <img className={`${props.column} img-fluid`} alt="" src={props.photo.url} />
  </a>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  column: PropTypes.string.isRequired,
};

export default Photo;
