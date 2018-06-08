
import React from 'react';
import ReactDOM from 'react-dom';
import PhotoTable from './components/PhotoTable';

require('bootstrap/dist/css/bootstrap.min.css');
require('../../public/style/main.css');


ReactDOM.render(<PhotoTable />, document.getElementById('photo-service'));
