import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div className="row">
    <div className="col-md-4">
      <img alt="" src={props.photo.url} />
    </div>
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
