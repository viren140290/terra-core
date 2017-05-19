import React from 'react';
import TogglerUncontrolled from '../../../lib/TogglerUncontrolled';
import TogglerSetup from './TogglerSetup';

class TogglerDefault extends React.Component {
  constructor() {
    super();
    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  /* eslint-disable */
  handleOnOpen() {
    console.log('onOpen');
  }

  handleOnClose() {
    console.log('onClose');
  }
  /* eslint-enable */

  render() {
    return (
      <TogglerUncontrolled
        buttonContent={'Click Here'}
        onOpen={this.handleOnOpen}
        onClose={this.handleOnClose}
      >
        {TogglerSetup.children}
      </TogglerUncontrolled>
    );
  }
}

export default TogglerDefault;
