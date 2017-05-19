import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import Toggler from './Toggler';

const propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: PropTypes.node.isRequired,
  /**
   * Expands or collapses content
   **/
  isOpen: PropTypes.bool,
  /**
   * Button content
   **/
  buttonContent: PropTypes.node,
  /**
   * Function called when toggler opens
   **/
  onOpen: PropTypes.func,
  /**
   * Function called when toggler closes
   **/
  onClose: PropTypes.func,
  /**
   * CSS classnames that are append to the button
   **/
  classNameButton: PropTypes.string,
  /**
   * CSS classnames that are append to the toggler
   **/
  classNameToggler: PropTypes.string,
};

const defaultProps = {
  buttonContent: null,
  children: null,
  isOpen: false,
};

class TogglerUncontrolled extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
    if (!this.state.isOpen && this.props.onOpen) {
      this.props.onOpen();
    } else if (this.state.isOpen && this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const { buttonContent,
            isOpen,
            children,
            classNameButton,
            classNameToggler,
            onOpen,
            onClose,
            ...customProps } = this.props;

    const buttonClass = classNames([
      'terra-Toggler-button',
      classNameButton,
    ]);

    const togglerClass = classNames([
      'terra-Toggler-uncontrolled',
      classNameToggler,
    ]);

    return (
      <div>
        <Button onClick={this.handleOnClick} aria-expanded={this.state.isOpen} className={buttonClass}>{buttonContent}</Button>
        <Toggler isOpen={this.state.isOpen} {...customProps} className={togglerClass}>
          {children}
        </Toggler>
      </div>
    );
  }
}

TogglerUncontrolled.propTypes = propTypes;
TogglerUncontrolled.defaultProps = defaultProps;

export default TogglerUncontrolled;
