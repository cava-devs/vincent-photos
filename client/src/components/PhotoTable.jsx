import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import exampleData from '../../../exampleData';

class PhotoTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: exampleData,
    };
  }

  render() {
    return (
      <div className="photos">
        <header className="photo-gallery-header">
          <h1>Photos</h1>
        </header>
        <ul>
          {
            this.state.photos.map(photo => (
              <Photo
                key={photo.id}
                photo={photo}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default PhotoTable;
