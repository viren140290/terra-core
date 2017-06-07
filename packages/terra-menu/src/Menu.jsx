import React from 'react';
import List from 'terra-list';
import PropTypes from 'prop-types';
import PopupPresenter from 'terra-popup-presenter';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import 'terra-base/lib/baseStyles';
import './Menu.scss';

const propTypes = {
  target: PropTypes.element,
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { isOpen: false };
  }

  setButtonNode(node) {
    if (node === null) { return; }
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleOnClick() {
    if (this.props.children) {
      this.setState({ isOpen: true });
    }
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { target, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const targetClone = React.cloneElement(target, { onClick: this.handleOnClick });

    return (
      <div>
        <PopupPresenter
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isArrowDisplayed
        >
          <List {...attributes}>
            {children}
          </List>
        </PopupPresenter>
        <div ref={this.setButtonNode}>
          {targetClone}
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;

export default Menu;

