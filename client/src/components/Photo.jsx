import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div>
    <li>
      <img alt="" src={props.photo.url} />
    </li>
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
