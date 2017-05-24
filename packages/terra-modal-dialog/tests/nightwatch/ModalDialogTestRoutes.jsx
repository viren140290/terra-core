/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ModalDialogTests from './ModalDialogTests';

// components
import ModalDialogDefault from './components/ModalDialogDefault';
import ModalDialogElement from './components/ModalDialogElement';
import ModalDialogIcon from './components/ModalDialogIcon';
import ModalDialogLongText from './components/ModalDialogLongText';
import ModalDialogNoText from './components/ModalDialogNoText';

const routes = (
  <div>
    <Route path="/tests/modal-dialog-tests" component={ModalDialogTests} />
    <Route path="/tests/modal-dialog-tests/default" component={ModalDialogDefault} />
    <Route path="/tests/modal-dialog-tests/element" component={ModalDialogElement} />
    <Route path="/tests/modal-dialog-tests/icon" component={ModalDialogIcon} />
    <Route path="/tests/modal-dialog-tests/long-text" component={ModalDialogLongText} />
    <Route path="/tests/modal-dialog-tests/no-text" component={ModalDialogNoText} />
  </div>
);

export default routes;
