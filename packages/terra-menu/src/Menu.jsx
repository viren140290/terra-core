import React from 'react';
import List from 'terra-list';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopupPresenter from 'terra-popup-presenter';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import 'terra-base/lib/baseStyles';
import './Menu.scss';

const propTypes = {
  target: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

const defaultProps = {
  isOpen: false,
  children: [],
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { isOpen: false };
  }

  handleOnClick() {
    if (this.props.children) {
      this.setState({ isOpen: true });
    }
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
    this.props.onRequestClose();
  }

  render() {
    const { target, isOpen, onRequestClose, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const menuClassName = classNames([
      'terra-Menu',
      attributes.className,
    ]);

    return (
      <PopupPresenter
        content={
          <List {...attributes} className={menuClassName}>
            {children}
          </List>
        }
        contentAttachment="bottom center"
        isOpen={this.state.isOpen}
        target={React.cloneElement(target, { onClick: this.handleOnClick })}
        onRequestClose={this.handleRequestClose}
        showArrow
      />
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;

export default Menu;

