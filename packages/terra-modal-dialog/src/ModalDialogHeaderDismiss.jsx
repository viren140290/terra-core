import React from 'react';
import PropTypes from 'prop-types';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Button from 'terra-button';
import './ModalDialogHeaderDismiss.scss';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
};

const ModalDialogDismiss = ({ onClick, ...customProps }) => (
  <Button variant="link" className="terra-ModalDialog-header-dismiss" onClick={onClick} {...customProps} >
    <IconClose />
  </Button>);

ModalDialogDismiss.propTypes = propTypes;
ModalDialogDismiss.defaultProps = defaultProps;

export default ModalDialogDismiss;
