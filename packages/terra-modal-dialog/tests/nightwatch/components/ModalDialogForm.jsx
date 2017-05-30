import React from 'react';
import ModalDialog from '../../../src/ModalDialog';
import Button from 'terra-button';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import Input from 'terra-form/lib/Input';
import './ModalDialogForm.scss';

const buttonStyle = {
  marginLeft: '0.2rem',
  marginRight: '0.2rem',
};

class ModalDialogDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
      formData: {
        jobTitle: 'Software Engineer',
        first: 'John',
        middle: 'Jacob',
        last: 'Smith',
      },
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearSubmission = this.handleClearSubmission.bind(this);
  }


  handleEmploymentUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.jobTitle = e.target.value;
    this.setState({ formData });
  }

  handleNameUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
      isOpen: false,
    });
  }

  handleClearSubmission() {
    this.setState({submittedData: false});
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
          closeOnEsc={false}
          closeOnOutsideClick={false}
          ariaLabel="Modal Dialog Example"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <ModalDialog.Header >Form Modal Dialog</ModalDialog.Header>
          <form id="example-dialog-form" onSubmit={this.handleFormSubmit}>
            <ModalDialog.Content>
              <Field
                label="Job Title"
                help="This is your most recent employment position"
              >
                <Input type="text" name="employment" value={this.state.formData.jobTitle} onChange={this.handleEmploymentUpdate} />
              </Field>
              <Fieldset
                legend="Name"
              >
                <Field
                  label="First"
                  isInline
                >
                  <Input type="text" name="first" value={this.state.formData.first} onChange={this.handleNameUpdate} />
                </Field>
                <Field
                  label="Middle"
                  isInline
                >
                  <Input type="text" name="middle" value={this.state.formData.middle} onChange={this.handleNameUpdate} />
                </Field>
                <Field
                  label="Last"
                  isInline
                >
                  <Input type="text" name="last" value={this.state.formData.last} onChange={this.handleNameUpdate} />
                </Field>
              </Fieldset>
            </ModalDialog.Content>
          <ModalDialog.Footer>
            <Button text="Submit" type="submit" />
          </ModalDialog.Footer>
        </form>
        </ModalDialog>
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <hr />
        {this.state.submittedData && [<p key="test">Form was submitted with {JSON.stringify(this.state.submittedData)}</p>]}
        <button onClick={this.handleClearSubmission}>Clear Submission</button>
      </div>
    )
  }
}

export default ModalDialogDefault;
