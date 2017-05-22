import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  display: PropTypes.element,
  isSelected: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  isSelected: false,
};

const MenuItem = ({ display, children, ...customProps }) => {
  const menuItemClassName = classNames([
    'terra-MenuItem',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={menuItemClassName}>
      {display}
    </div>
  );
};


MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
