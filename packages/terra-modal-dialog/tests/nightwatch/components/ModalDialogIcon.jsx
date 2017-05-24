import React from 'react';
import Modal from 'terra-modal';
import ModalDialog from '../../../src/ModalDialog';

import Example from './examplesetup';

class ModalDialogIcon extends React.Component {
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
            <ModalDialog.Header onClick={this.handleCloseModal} >{Example.DialogHeaderIcon}</ModalDialog.Header>
            <ModalDialog.ContentHeader>{Example.DialogContentHeaderIcon}</ModalDialog.ContentHeader>
            <ModalDialog.Content>{Example.DialogContentIcon}</ModalDialog.Content>
            <ModalDialog.Footer>{Example.DialogFooterIcon}</ModalDialog.Footer>
          </ModalDialog>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalDialogIcon;
