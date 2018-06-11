import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div>
    <a href={props.photo.url}>
      <img className="img-fluid" alt="" src={props.photo.url} />
    </a>
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
