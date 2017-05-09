/*eslint-disable no-debugger*/

import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import classNames from 'classnames';
import Button from 'terra-button';
import PopupPresenter from 'terra-popup-presenter';
import Item from './TabItem';
import './CollapsibleTabView.scss';

const propTypes = {
  /**
   * The children to be placed within the button view.
   */
  children: PropTypes.node,
  /**
   * The children to be placed within the button view.
   */
  alignment: PropTypes.oneOf(['alignStart', 'alignEnd']),
  isTruncated: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  alignment: 'alignStart',
};

class CollapsibleTabView extends React.Component { 
  static getSelectedIndex(children) {
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].props.isSelected) {
        return i;
      }
    }
    return -1;
  }

  static getInitialState(children) {
    const selectedTabIndex = CollapsibleTabView.getSelectedIndex(children);
    return { hideTabs: false, selectedTabIndex , toggleOpen: false};
  }

  constructor(props) {
    super(props);
    this.state = CollapsibleTabView.getInitialState(this.props.children);
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.toggleButton = <Button text="…" onClick={this.handleButtonClick} />;
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { 
        this.setState({ hideTabs: false, selectedStates: this.state.selectedStates, toggleOpen: this.state.toggleOpen });
        this.forceUpdate(); 
        this.handleResize(entries[0].contentRect.width); 
      });
      this.resizeObserver.observe(this.container);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
      this.parentContainer = null;
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
    this.parentContainer = node.parentNode;
  }

  handleButtonClick() {
    this.setState({ toggleOpen: true, hiddenIndexes: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
  }

  handleRequestClose() {
    this.setState({ toggleOpen: false, hiddenIndexes: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
  }

  handleResize(width) {
    // do calculation here
    const widthToMeasure = width;
    let hideTabs = false;
    let calcWidth = 0;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      if (!child) {
        break;
      }
      calcWidth += child.getBoundingClientRect().width;
      if (calcWidth > widthToMeasure) {
        hideTabs = true;
        break;
      }
    }

    this.adjustedWith = this.parentContainer.getBoundingClientRect().width - 12;
    this.setState({ toggleOpen: false, hideTabs, selectedStates: this.state.selectedStates });
  }

  handleOnClick(event, index) {
    if (this.state.selectedIndex !== index) {
      this.setState({ toggleOpen: false, hideTabs: this.state.hideTabs, selectedIndex: index });
      this.props.onChange(event, index);
    } else {
      this.setState({ toggleOpen: false, hideTabs: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
    }
  }

  wrapOnClick(item, index) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event, index);

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapChildComponents(children, indexPath) {
    return children.map((child, index) => {
      const newProps = {};

      newProps.onClick = this.wrapOnClick(child, index);
      newProps.isSelected = (index === this.state.selectedIndex);

      return React.cloneElement(child, newProps);
    });
  }

  render() {
    const { children,
            alignment,
            ...customProps } = this.props;

    const listClassNames = classNames([
        'terra-CollapsibleTabView',
        { [`terra-CollapsibleTabView-${alignment}`]: alignment },
        customProps.className,
      ]);

    const wrappedChildren = this.wrapChildComponents(children, []);

    let content = wrappedChildren.map((child, childIndex) => {
      const childKey = childIndex;
      return (
        <div className="terra-CollapsibleTabView-item" key={childKey}>
          {child}
        </div>
      );
    });

    let toggle;
    let style;
    if (this.state.hideTabs) {
      const constraints = [{to: 'window', attachment: 'together'}];
      toggle = (
        <div className="terra-CollapsibleTabView-toggle">
          <PopupPresenter 
            constraints={constraints}
            content={<div style={{width: this.adjustedWith + 'px'}}>{wrappedChildren}</div>}
            // contentOffset="0 -20px"
            contentAttachment="top right"
            isOpen={this.state.toggleOpen}
            target={this.toggleButton}
            targetAttachment="bottom right"
            onRequestClose={this.handleRequestClose}
            showArrow={false}
          />
        </div>
      );
        
      content = undefined;
      if (this.state.selectedIndex >= 0)
      {
        const child = wrappedChildren[this.state.selectedIndex];
        if (child) {
          content = React.cloneElement(child, {style: {width: '100%'}});
        }
      }
    }

    return (
      <div className="terra-CollapsibleTabView">
        <div className="terra-CollapsibleTabView-container" ref={this.setContainer}>
          {content}
        </div>
        <div className="terra-CollapsibleTabView-toggle">
          {toggle}
        </div>
      </div>

    );
  }
}

CollapsibleTabView.propTypes = propTypes;
CollapsibleTabView.defaultProps = defaultProps;
CollapsibleTabView.Item = Item;

export default CollapsibleTabView;

