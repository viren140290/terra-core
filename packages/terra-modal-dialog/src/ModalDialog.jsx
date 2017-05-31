import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'terra-modal';
import Header from './ModalDialogHeader';
import ContentHeader from './ModalDialogContentHeader';
import Content from './ModalDialogContent';
import Footer from './ModalDialogFooter';
import './ModalDialog.scss';

const propTypes = {
  /**
   * String that labels the modal for screen readers
   **/
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Content inside the modal dialog
   **/
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are append to the modal
   **/
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are append to the overlay
   **/
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when the esc key is pressed
   **/
  closeOnEsc: PropTypes.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal
   **/
  closeOnOutsideClick: PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes
   **/
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal will rendered as opened
   **/
  isOpen: PropTypes.bool.isRequired,
  /**
   * Function to set isOpen={false} and close the modal.
   **/
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Role attribute on the modal dialog
   **/
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpen: false,
  role: 'document',
};

class ModalDialog extends React.Component {
  constructor() {
    super();
    this.state = ({ height: '30px' });
    this.calculateHeight = this.calculateHeight.bind(this);
  }

  componentDidMount() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateHeight);
  }

  calculateHeight() {
    // When the width <=767, the modal changes to fullscreen
    if (document.documentElement.clientWidth > 767) {
      this.setState({ height: document.documentElement.clientHeight - 100 });
    } else {
      this.setState({ height: null });
    }
  }

  render() {
    const {
          ariaLabel,
          children,
          classNameModal,
          classNameOverlay,
          closeOnEsc,
          closeOnOutsideClick,
          isFullscreen,
          isOpen,
          role,
          onRequestClose,
           ...customProps } = this.props;

    const newHeight = { maxHeight: this.state.height };

    if (!isOpen) {
      return null;
    }

    return <Modal
              ariaLabel={ariaLabel}
              classNameModal={classNameModal}
              classNameOverlay={classNameOverlay}
              closeOnOutsideClick={closeOnOutsideClick}
              closeOnEsc={closeOnEsc}
              isFullscreen={isFullscreen}
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              role={role}
           >
             <div style={newHeight} className="terra-ModalDialog" {...customProps}>
               {children}
             </div>
           </Modal>
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

ModalDialog.Header = Header;
ModalDialog.ContentHeader = ContentHeader;
ModalDialog.Content = Content;
ModalDialog.Footer = Footer;

export default ModalDialog;
