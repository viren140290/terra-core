import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'terra-button';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import 'terra-base/lib/baseStyles';
import './Menu.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['alignStart', 'alignEnd']),
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      hiddenIndexes: [],
      toggleOpen: false,
    };
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.setState({ hiddenIndexes: [], toggleOpen: this.state.toggleOpen });
        this.forceUpdate();
        this.handleResize(entries[0].contentRect.width);
      });
      this.resizeObserver.observe(this.container);
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  handleResize(width) {
    // do calculation here
    const availableWidth = width;
    const hiddenIndexes = [];
    let calcWidth = 0;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      if (!child) {
        break;
      }
      calcWidth += child.getBoundingClientRect().width;
      if (calcWidth > availableWidth) {
        hiddenIndexes.push(i);
      }
    }
    // this needs to match arrays
    if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
      this.setState({ toggleOpen: false, hiddenIndexes });
    }
  }

  visibleChildComponents(children) {
    const visibleChildren = [];
    for (let i = 0; i < children.length; i += 1) {
      if (this.state.hiddenIndexes.indexOf(i) < 0) {
        visibleChildren.push(children[i]);
      }
    }
    return visibleChildren;
  }

  render() {
    const { children, ...customProps } = this.props;
    const visibleChildren = this.visibleChildComponents(children);
    const menuClassName = classNames([
      'terra-Menu',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={menuClassName}>
        <div className="terra-Menu-container" ref={this.setContainer}>
          {visibleChildren}
        </div>
        <div className="terra-Menu-toggle">
          <Button text="..." />
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;

Menu.Item = MenuItem;

Menu.Group = MenuItemGroup;

export default Menu;
