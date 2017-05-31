import React from 'react';
import PropTypes from 'prop-types';
import './ModalDialogContent.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalDialogContent = ({ children, ...customProps }) => (
  <div className={'terra-ModalDialog-content'} {...customProps} >
    {children}
  </div>
  );


ModalDialogContent.propTypes = propTypes;
ModalDialogContent.defaultProps = defaultProps;

export default ModalDialogContent;
