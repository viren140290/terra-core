import React from 'react';
import PropTypes from 'prop-types';
import './ModalContentHeader.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalContentHeader = ({ children, ...customProps }) => (
  <div className={'terra-ModalDialog-contentHeader'} {...customProps} >
    {children}
  </div>
  );

ModalContentHeader.propTypes = propTypes;
ModalContentHeader.defaultProps = defaultProps;

export default ModalContentHeader;
