import React from 'react';
import Modal from 'terra-modal';
import ModalDialog from '../../../src/ModalDialog';

import Example from './examplesetup';

class ModalDialogDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: true,
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
      <div>
        <Modal
          ariaLabel="Modal Dialog Example"
          isOpened={this.state.isOpened}
          onRequestClose={this.handleCloseModal}
        >
          <ModalDialog>
            <ModalDialog.Header onClick={this.handleCloseModal} >{Example.DialogHeader}</ModalDialog.Header>
            <ModalDialog.ContentHeader>{Example.DialogContentHeader}</ModalDialog.ContentHeader>
            <ModalDialog.Content>{Example.DialogContent}</ModalDialog.Content>
            <ModalDialog.Footer>{Example.DialogFooter}</ModalDialog.Footer>
          </ModalDialog>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalDialogDefault;
