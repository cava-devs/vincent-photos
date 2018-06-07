import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import exampleData from '../../../exampleData';

class PhotoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: exampleData,
      photoCount: exampleData.length,
    };
  }

  render() {
    return (
      <div className="photos">
        <header className="photo-gallery-header col-md-4">
          <h2>{this.state.photoCount} Photos</h2>
        </header>
        <section>
          <div className="container">
            {
              this.state.photos.map(photo => (
                <Photo
                  key={photo.id}
                  photo={photo}
                />
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default PhotoTable;
