import React from 'react';
import ModalDialog from '../../../src/ModalDialog';
import Example from './examplesetup';

class ModalDialogNoText extends React.Component {
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
          <ModalDialog.Header onClick={this.handleCloseModal} >{Example.DialogHeaderNoText}</ModalDialog.Header>
          <ModalDialog.ContentHeader>{Example.DialogContentHeaderNoText}</ModalDialog.ContentHeader>
          <ModalDialog.Content>{Example.DialogContentNoText}</ModalDialog.Content>
          <ModalDialog.Footer>{Example.DialogFooterNoText}</ModalDialog.Footer>
        </ModalDialog>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalDialogNoText;
