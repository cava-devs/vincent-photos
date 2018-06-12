import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Photo from './Photo';
import ViewMore from './ViewMore';
import ViewMoreTile from './ViewMoreTile';

class PhotoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoIndex: 0,
      isOpen: false,
      photoCount: 0,
      photoURL: '',
    };
    this.servePhotos = this.servePhotos.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onCloseRequest = this.onCloseRequest.bind(this);
    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

  componentDidMount() {
    this.servePhotos();
  }

  onClick() {
    this.setState({
      isOpen: true,
    });
  }

  onCloseRequest() {
    this.setState({
      isOpen: false,
    });
  }

  onMovePrevRequest() {
    this.setState({
      photoIndex: (this.state.photoIndex + (this.state.photoCount - 1)) % this.state.photoCount,
    });
  }

  onMoveNextRequest() {
    this.setState({
      photoIndex: (this.state.photoIndex + 1) % this.state.photoCount.length,
    });
  }

  servePhotos() {
    axios.get('/restaurant/1008/photos')
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
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.photos[this.state.photoIndex].url}
            nextSrc={this.state.photos[(this.state.photoIndex + 1) % this.state.photoCount].url}
            prevSrc={
              this.state.photos[
                (this.state.photoIndex + (this.state.photoCount - 1)) % this.state.photoCount
              ].url
            }
            onCloseRequest={this.onCloseRequest}
            onMovePrevRequest={this.onMovePrevRequest}
            onMoveNextRequest={this.onMoveNextRequest}
          />
        )}
        <div className="container">
          <div className="photo-gallery-header mb-2">
            <h2>
              {this.state.photoCount} Photos
              {this.state.photoCount > 4 &&
                <ViewMore photoURL={this.state.photoURL} />
              }
            </h2>
          </div>
        </div>
        <div className="container photo-gallery-table">
          <div className="row justify-content-center">
            <div className="photo-col">
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(0, 1).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-one"
                      onClick={this.onClick}
                    />
                  ))
                }
              </div>
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(1, 2).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-one"
                      onClick={this.onClick}
                    />
                  ))
                }
              </div>
            </div>
            <div className="photo-col">
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(2, 3).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-two"
                    />
                  ))
                }
              </div>
            </div>
            <div className="photo-col">
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(3, 4).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-three"
                    />
                  ))
                }
              </div>
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(4, 5).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-three"
                    />
                  ))
                }
              </div>
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(5, 6).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-three"
                    />
                  ))
                }
              </div>
            </div>
            <div className="photo-col">
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(6, 7).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-four"
                    />
                  ))
                }
              </div>
              <div className="photo-gallery-image">
                {
                  this.state.photos.slice(7, 8).map(photo => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      column="col-four"
                    />
                  ))
                }
              </div>
              <div className="photo-gallery-image">
                <div className="img-overlay">
                  {
                    this.state.photos.slice(8, 9).map(photo => (
                      <Photo
                        key={photo.id}
                        photo={photo}
                        column="col-four"
                      />
                    ))
                  }
                  <div>
                    {this.state.photoCount > 8 &&
                      <ViewMoreTile photoCount={this.state.photoCount} photoURL={this.state.photoURL} column="col-four" />
                    }
                  </div>
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
  column: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  photoCount: PropTypes.number.isRequired,
  photoURL: PropTypes.string.isRequired,
};

export default PhotoTable;
