import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from 'terra-list';
import 'terra-base/lib/baseStyles';
import './MenuItemGroup.scss';

const propTypes = {
  children: PropTypes.node,
  isListStyle: PropTypes.bool,
};

const defaultProps = {
  isListStyle: false,
};

const MenuItemGroup = ({ children, isListStyle, ...customProps }) => {
  const menuItemGroupClassName = classNames([
    'terra-MenuItemGroup',
    customProps.className,
  ]);

  let items = children;
  let group = (
    <div {...customProps} className={menuItemGroupClassName}>
      {items}
    </div>
  );

  if (isListStyle) {
    items = children.map(child => (
      <List.Item content={<div>{child.props.display.props.text}</div>} />
    ));
    group = (
      <List {...customProps} className="terra-MenuItemGroup--list" isDivided>
        {items}
      </List>
    );
  }

  return group;
};


MenuItemGroup.propTypes = propTypes;
MenuItemGroup.defaultProps = defaultProps;

export default MenuItemGroup;
