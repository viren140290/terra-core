import React from 'react';
import PropTypes from 'prop-types';
import ModalDismiss from './ModalDismiss';
import './ModalHeader.scss';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
};

const ModalHeader = ({ children, onClick, ...customProps }) => (
  <div className={'terra-ModalDialog-header'}>
    <div className={'terra-ModalDialog-header-title'} {...customProps} >
      {children}
    </div>
    <ModalDismiss onClick={onClick} />
  </div>
  );

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
