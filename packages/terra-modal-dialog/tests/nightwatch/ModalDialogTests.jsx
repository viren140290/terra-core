/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ModalTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/modal-dialog-tests/default">Default Example</Link></li>
      <li><Link to="/tests/modal-dialog-tests/element">Children are html elements</Link></li>
      <li><Link to="/tests/modal-dialog-tests/icon">Children contain icons</Link></li>
      <li><Link to="/tests/modal-dialog-tests/long-text">Children are long strings</Link></li>
      <li><Link to="/tests/modal-dialog-tests/no-text">Children are empty strings</Link></li>
    </ul>
  </div>
);

export default ModalTests;
