/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TogglerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggler-tests/controlled">Toggler Controlled</Link></li>
      <li><Link to="/tests/toggler-tests/uncontrolled">Toggler Uncontrolled</Link></li>
    </ul>
  </div>
);

export default TogglerTests;
