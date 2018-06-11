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
    axios.get('/restaurant/1077/photos')
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
        <div className="photo-gallery-header col-md-6 mb-2">
          <h2>
            {this.state.photoCount} Photos
            {this.state.photoCount > 4 &&
              <ViewMore photoURL={this.state.photoURL} />
            }
          </h2>
        </div>
        <div className="container">
          <div className="row no-gutter justify-content-center">
            <div className="text-center col col-lg-3 col-md-4 col-sm-6 col-grid">
              {
                this.state.photos.slice(0, 2).map(photo => (
                  <Photo
                    key={photo.id}
                    photo={photo}
                  />
                ))
              }
            </div>
            <div className="text-center col col-lg-3 col-md-4 col-sm-6 col-grid">
              {
                this.state.photos.slice(2, 3).map(photo => (
                  <Photo
                    key={photo.id}
                    photo={photo}
                  />
                ))
              }
            </div>
            <div className="text-center col col-lg-3 col-md-4 col-sm-6 col-grid">
              {
                this.state.photos.slice(3, 6).map(photo => (
                  <Photo
                    key={photo.id}
                    photo={photo}
                  />
                ))
              }
            </div>
            <div className="text-center col col-lg-3 col-md-4 col-sm-6 col-grid">
              {
                this.state.photos.slice(6, 8).map(photo => (
                  <Photo
                    key={photo.id}
                    photo={photo}
                  />
                ))
              }
              <div className="img-overlay">
                {
                  this.state.photos.slice(8, 9).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                    />
                  ))
                }
                <div className="project-overlay">
                  <p>+ {this.state.photoCount - 8} more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default PhotoTable;
