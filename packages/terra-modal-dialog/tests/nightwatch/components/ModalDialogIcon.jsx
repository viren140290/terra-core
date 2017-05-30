import React from 'react';
import ModalDialog from '../../../src/ModalDialog';

import Example from './examplesetup';

class ModalDialogIcon extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
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
          <ModalDialog.Header onClick={this.handleCloseModal} >{Example.DialogHeaderIcon}</ModalDialog.Header>
          <ModalDialog.ContentHeader>{Example.DialogContentHeaderIcon}</ModalDialog.ContentHeader>
          <ModalDialog.Content>{Example.DialogContentIcon}</ModalDialog.Content>
          <ModalDialog.Footer>{Example.DialogFooterIcon}</ModalDialog.Footer>
        </ModalDialog>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalDialogIcon;
