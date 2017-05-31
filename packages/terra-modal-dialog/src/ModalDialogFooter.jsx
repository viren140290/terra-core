import React from 'react';
import PropTypes from 'prop-types';
import './ModalDialogFooter.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalDialogFooter = ({ children, ...customProps }) => (
  <div className={'terra-ModalDialog-footer'} {...customProps} >
    {children}
  </div>
  );


ModalDialogFooter.propTypes = propTypes;
ModalDialogFooter.defaultProps = defaultProps;

export default ModalDialogFooter;

