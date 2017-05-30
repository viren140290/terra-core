import React from 'react';
import PropTypes from 'prop-types';
import ModalDismiss from './ModalDismiss';
import './ModalHeader.scss';

const propTypes = {
  children: PropTypes.node,
  hasDismiss: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
};

const ModalHeader = ({ children, onClick, ...customProps }) => {
  const dismissButton = onClick ? <ModalDismiss onClick={onClick} /> : null;

  return (<div className={'terra-ModalDialog-header'}>
    <div className={'terra-ModalDialog-header-title'} {...customProps} >
      {children}
    </div>
    {dismissButton}
  </div>);
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
