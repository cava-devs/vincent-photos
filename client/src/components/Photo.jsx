import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div className="d-flex flex-row flex-wrap justify-content-center">
    <div className="d-flex flex-column">
      <div className="thumbnail">
        <a href={props.photo.url}>
          <img className="img-responsive" alt="" src={props.photo.url} />
        </a>
      </div>
    </div>
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
