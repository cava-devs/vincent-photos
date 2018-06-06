import React from 'react';
import Photo from './Photo';
import exampleData from '../../../exampleData';

const PropTypes = require('prop-types');


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

PhotoTable.propTypes = {
  photos: PropTypes.array,
};

export default PhotoTable;
