import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div className="row">
    <img alt="" src={props.photo.url} className="img-fluid col-md-4" />
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
