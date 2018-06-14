
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PhotoTable from './components/PhotoTable';

require('bootstrap/dist/css/bootstrap.min.css');
require('../../public/style/main.css');


ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/restaurant/:restaurantId" component={PhotoTable} />
  </BrowserRouter>), document.getElementById('photo-service'));
