import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  children: PropTypes.node,
};

const MenuItem = ({ children, ...customProps }) => {
  const menuItemGroupClassName = classNames([
    'terra-MenuItemGroup',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={menuItemGroupClassName}>
      {children}
    </div>
  );
};


MenuItem.propTypes = propTypes;

export default MenuItem;
