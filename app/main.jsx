'use strict';

import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';

import Resume from './components/Resume';
import AppContainer from './containers/AppContainer';

render (
  <Router history={browserHistory}>
    <Route path='/' >
      <IndexRedirect to='/home' />
        <Route path='/home' component={AppContainer} />
        <Route path='/resume' component={Resume} />
    </Route>
  </Router>,
  document.getElementById('main')
)



