import React from 'react';
import PropTypes from 'prop-types';
import './ModalDialogContentHeader.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalDialogContentHeader = ({ children, ...customProps }) => (
  <div className={'terra-ModalDialog-contentHeader'} {...customProps} >
    {children}
  </div>
  );

ModalDialogContentHeader.propTypes = propTypes;
ModalDialogContentHeader.defaultProps = defaultProps;

export default ModalDialogContentHeader;
