# Terra Modal

{description}

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-dialog`
  - `yarn add terra-modal-dialog`

## Usage

```jsx
import React from 'react';
import ModalDialog from 'terra-modal-dialog';

class MyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleOpenModal() {
    this.setState({ isOpened: true });
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      // TODO
    );
  }
}

export default MyApp;
```
