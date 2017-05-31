# Terra Modal Dialog

The Modal Dialog component is a more opinionated, structured version of the Modal. The Modal Dialog includes a header, content header, content, and footer component.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-dialog`
  - `yarn add terra-modal-dialog`

## Usage

```jsx
import React from 'react';
import ModalDialog from 'terra-modal-dialog';

class ModalDialogDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <ModalDialog
          ariaLabel="Modal Dialog Example"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <ModalDialog.Header onClick={this.handleCloseModal} >Modal Dialog Header</ModalDialog.Header>
          <ModalDialog.ContentHeader>Static Content Header</ModalDialog.ContentHeader>
          <ModalDialog.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus velit non vehicula gravida. Nullam tempor erat at eros interdum, eget sodales mi finibus. Donec ac lorem enim. Donec imperdiet arcu sit amet interdum egestas. Aliquam quam quam, accumsan et egestas sed, imperdiet et purus. Vestibulum lacus ante, pulvinar sit amet turpis non, ultrices molestie nunc. Nam mollis pharetra felis sit amet eleifend. Nunc sagittis aliquet efficitur. Integer gravida, augue in mollis ultrices, felis diam maximus turpis, vitae pretium augue libero sit amet leo. Curabitur vel magna ac nulla laoreet viverra ac et mauris. In eleifend ex quis ipsum tristique, ut efficitur ligula luctus. Nullam id pretium nisl. Sed nec vehicula dolor, quis facilisis odio. Sed volutpat magna ut tincidunt fermentum. Mauris cursus metus id laoreet consectetur.</p>
          </ModalDialog.Content>
          <ModalDialog.Footer>{'Footer'}</ModalDialog.Footer>
        </ModalDialog>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    )
  }
}

export default ModalDialogDefault;

```
