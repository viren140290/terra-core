import React from 'react';
import PropTypes from 'prop-types';
import ModalDialogHeaderDismiss from './ModalDialogHeaderDismiss';
import './ModalDialogHeader.scss';

const propTypes = {
  children: PropTypes.node,
  hasDismiss: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
};

const ModalDialogHeader = ({ children, onClick, ...customProps }) => {
  const dismissButton = onClick ? <ModalDialogHeaderDismiss onClick={onClick} /> : null;

  return (<div className={'terra-ModalDialog-header'}>
    <div className={'terra-ModalDialog-header-title'} {...customProps} >
      {children}
    </div>
    {dismissButton}
  </div>);
};

ModalDialogHeader.propTypes = propTypes;
ModalDialogHeader.defaultProps = defaultProps;

export default ModalDialogHeader;
