'use strict';

import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';

import Home from './components/Home';
import AppContainer from './containers/AppContainer';
import ContactContainer from './containers/ContactContainer';

render (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to='/home' />
        <Route path='/home' component={AppContainer} />
        <Route path='/contact' component={ContactContainer} />
    </Route>
  </Router>,
  document.getElementById('main')
)



