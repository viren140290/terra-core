import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: PropTypes.node.isRequired,
  /**
   * Expands or collapses content
   **/
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isOpen: false,
};

const Toggler = ({ isOpen, children, ...customProps }) => {
  const togglerClass = classNames([
    'terra-Toggler',
    customProps.className,
  ]);

  if (!isOpen) {
    return null;
  }

  return (
    <div {...customProps} className={togglerClass} >
      {children}
    </div>
  );
};

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
