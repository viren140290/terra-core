import React from 'react';
import TogglerUncontrolled from 'terra-toggler/src/TogglerUncontrolled';
import IconExpandMore from 'terra-icon/lib/icon/IconExpandMore';
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
        buttonContent={<span><IconExpandMore /> Click Here</span>}
        onOpen={this.handleOnOpen}
        onClose={this.handleOnClose}
      >
        {TogglerSetup.children}
      </TogglerUncontrolled>
    );
  }
}

export default TogglerDefault;
