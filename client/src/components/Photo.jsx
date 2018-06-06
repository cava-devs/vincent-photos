import React from 'react';

const Photo = props => (
  <div>
    <li>
      <img src={props.photo.url}></img>
    </li>
  </div>
);

export default Photo;
