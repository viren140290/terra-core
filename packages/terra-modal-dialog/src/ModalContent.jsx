import React from 'react';
import PropTypes from 'prop-types';
import './ModalContent.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalContent = ({ children, ...customProps }) => (
  <div className={'terra-ModalDialog-content'} {...customProps} >
    {children}
  </div>
  );


ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
