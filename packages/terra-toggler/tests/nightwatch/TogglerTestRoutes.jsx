/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TogglerTests from './TogglerTests';

import Toggler from './components/TogglerDefault';
import TogglerUncontrolled from './components/TogglerUncontrolledDefault';

const routes = (
  <div>
    <Route path="/tests/toggler-tests" component={TogglerTests} />
    <Route path="/tests/toggler-tests/controlled" component={Toggler} />
    <Route path="/tests/toggler-tests/uncontrolled" component={TogglerUncontrolled} />
  </div>
);

export default routes;
