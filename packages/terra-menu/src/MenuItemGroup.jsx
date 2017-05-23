import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './MenuItemGroup.scss';

const propTypes = {
  children: PropTypes.node,
};

const MenuItemGroup = ({ children, ...customProps }) => {
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


MenuItemGroup.propTypes = propTypes;

export default MenuItemGroup;
