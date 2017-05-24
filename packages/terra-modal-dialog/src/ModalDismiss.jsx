import React from 'react';
import PropTypes from 'prop-types';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Button from 'terra-button';
import './ModalDismiss.scss';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
};

const ModalDismiss = ({ onClick, ...customProps }) => (
  <Button variant="link" className="terra-ModalDialog-header-dismiss" onClick={onClick} {...customProps} >
    <IconClose />
  </Button>);

ModalDismiss.propTypes = propTypes;
ModalDismiss.defaultProps = defaultProps;

export default ModalDismiss;
