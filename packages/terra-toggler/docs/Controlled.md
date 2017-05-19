## Usage
```
import React from 'react';
import Toggler from 'terra-toggler';
import Button from 'terra-button';
import TogglerSetup from './TogglerSetup';

class TogglerDefault extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOnClick}>{'Click Me!'}</Button>
        <Toggler isOpen={this.state.isOpen}>
          {TogglerSetup.children}
        </Toggler>
      </div>
    );
  }
}


export default TogglerDefault;
```
