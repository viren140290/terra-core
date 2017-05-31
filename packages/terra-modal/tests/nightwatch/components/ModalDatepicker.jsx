import React from 'react';
import Modal from '../../../lib/Modal';
import Datepicker from 'terra-date-picker';

class ModalIsOpen extends React.Component {
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
      <div>
        <Modal
          ariaLabel="Terra Modal"
          isOpened={this.state.isOpened}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>Terra Modal</h1>
            <h2>Subtitle</h2>
            <hr />
            <Datepicker
              minDate={'1-12-2015'}
              maxDate={'1-12-2018'}
            />
            <p>The Terra Modal is appended to the document body.</p>
            <p>{'Modal is assigned a role of \'document\' for accessibility.'}</p>
            <Datepicker
              minDate={'1-12-2015'}
              maxDate={'1-12-2018'}
              withPortal
            />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button className="button-open-modal" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalIsOpen;
