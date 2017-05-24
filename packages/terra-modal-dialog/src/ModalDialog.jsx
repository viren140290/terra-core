import React from 'react';
import PropTypes from 'prop-types';
import Header from './ModalHeader';
import ContentHeader from './ModalContentHeader';
import Content from './ModalContent';
import Footer from './ModalFooter';
import './ModalDialog.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
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
    const { children, ...customProps } = this.props;
    const newHeight = { maxHeight: this.state.height };
    return <div style={newHeight} className="terra-ModalDialog" {...customProps}>{children}</div>;
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

ModalDialog.Header = Header;
ModalDialog.ContentHeader = ContentHeader;
ModalDialog.Content = Content;
ModalDialog.Footer = Footer;

export default ModalDialog;
