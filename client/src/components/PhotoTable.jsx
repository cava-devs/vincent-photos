import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Photo from './Photo';
import ViewMore from './ViewMore';

class PhotoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoCount: 0,
      photoURL: '',
    };
    this.servePhotos = this.servePhotos.bind(this);
  }

  componentDidMount() {
    this.servePhotos();
  }

  servePhotos() {
    axios.get('/restaurant/1001/photos')
      .then((response) => {
        this.setState({
          photos: response.data,
          photoCount: response.data.length,
          photoURL: response.data[response.data.length - 1].url,
        });
      });
  }

  render() {
    return (
      <div>
        <header className="photo-gallery-header mb-2">
          <h2>
            {this.state.photoCount} Photos
            {this.state.photoCount > 4 &&
              <ViewMore photoURL={this.state.photoURL} />
            }
          </h2>
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
