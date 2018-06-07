import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Photo from './Photo';

class PhotoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoCount: 0,
    };
    this.servePhotos = this.servePhotos.bind(this);
  }

  componentDidMount() {
    this.servePhotos();
  }

  servePhotos() {
    axios.get('/restaurant/1001/photos')
      .then((response) => {
        console.log(response.data);
        this.setState({
          photos: response.data,
          photoCount: response.data.length,
        });
      });
  }

  render() {
    return (
      <div className="photos">
        <header className="photo-gallery-header col-md-5 mb-2">
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
