/*eslint-disable no-debugger*/

import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import classNames from 'classnames';
import Button from 'terra-button';
import Item from './CollapsibleButtonItem';
import Group from './CollapsibleButtonGroup';
import './CollapsibleButtonView.scss';

const propTypes = {
  /**
   * The children to be placed within the button view.
   */
  children: PropTypes.node,
  /**
   * The children to be placed within the button view.
   */
  alignment: PropTypes.oneOf(['alignStart', 'alignEnd']),
};

const defaultProps = {
  children: undefined,
  alignment: 'alignStart',
};

class CollapsibleButtonView extends React.Component { 
  static childFromIndexPath(children, indexPath) {
    let child;
    let currentChildren = children;
    const clonedIndexPath = indexPath.slice(0);

    while (clonedIndexPath.length > 0) {
      child = currentChildren ? currentChildren[clonedIndexPath.pop()] : null;
      currentChildren = child ? child.children : null;
    }

    return child;
  }

  static nestedArrayWithValueAtIndexPath(nestedArrays, value, indexPath) {
    const newArray = nestedArrays.map(a => Object.assign({}, a));
    let currentArray = newArray;
    const clonedIndexPath = indexPath.slice(0);

    while (clonedIndexPath.length > 1) {
      currentArray = currentArray[clonedIndexPath.pop()];
    }

    currentArray[clonedIndexPath] = value; 
    return newArray;
  }

  static getSelectedStates(children) {
    let selectedStates = [];
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].props.children) {
        selectedStates.push(CollapsibleButtonView.getSelectedStates(children[i].props.children));
      } else {
        selectedStates.push(children[i].props.isSelected);
      }
    }
    return selectedStates;
  }

  static indexPathValueFromNestedArrays(nestedArrays, indexPath) {
    let currentValue = nestedArrays;
    const clonedIndexPath = indexPath.slice(0);

    while (clonedIndexPath.length > 0) {
      currentValue = currentValue[clonedIndexPath.pop()];
    }
    return currentValue;
  }

  static getInitialState(children) {
    const selectedStates = CollapsibleButtonView.getSelectedStates(children);
    return { hiddenIndexes: [], selectedStates , toggleOpen: false};
  }

  constructor(props) {
    super(props);
    this.state = CollapsibleButtonView.getInitialState(this.props.children);
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleButton = <Button text="…" onClick={this.handleToggle} />;
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { 
        this.setState({ hiddenIndexes: [], selectedStates: this.state.selectedStates, toggleOpen: this.state.toggleOpen });
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
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  handleToggle() {
    this.setState({ toggleOpen: !this.state.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedStates: this.state.selectedStates });
  }

  handleResize(width) {
    // do calculation here
    const widthToMeasure = width;
    const hiddenIndexes = [];
    let calcWidth = 0;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      if (!child) {
        break;
      }
      calcWidth += child.getBoundingClientRect().width;
      if (calcWidth > widthToMeasure) {
        hiddenIndexes.push(i);
      }
    }

    if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
      this.setState({ toggleOpen: false, hiddenIndexes, selectedStates: this.state.selectedStates });
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

  hiddenChildComponents(children) {
    const indexes = this.state.hiddenIndexes;
    const hiddenChildren = [];
    for (let i = 0; i < indexes.length; i += 1) {
      hiddenChildren.push(children[indexes[i]]);
    }
    return hiddenChildren;
  }

  handleOnClick(event, index) {
    const shouldDismiss = this.children[index].isListStyle === true; //needs to be advanced
    if (this.state.toggleOpen && shouldDismiss) {
      this.setState({ toggleOpen: false, hiddenIndexes: this.state.hiddenIndexes, selectedStates: this.state.selectedStates });
    }
  }

  handleOnChange(event, indexPath, selectedValue) {
    const selectedStates = CollapsibleButtonView.nestedArrayWithValueAtIndexPath(this.state.selectedStates, selectedValue, indexPath);
    this.setState({ toggleOpen: this.state.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedStates });
  }

  wrapOnClick(item) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event);

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnChange(item, indexPath) {
    const onChange = item.props.onChange;
    return (event) => {
      this.handleOnChange(event, indexPath, selectedValue);

      if (onChange) {
        onChange(event, selectedValue);
      }
    };
  }

  wrapChildComponents(children, indexPath) {
    return children.map((child, i) => {
      const newProps = {};
      const clonedIndexPath = indexPath.slice(0);
      clonedIndexPath.push(i);

      if (child.type.displayName !== 'CollapsibleButtonGroup') {
        newProps.onChange = this.wrapOnChange(child, clonedIndexPath);
        newProps.selectedIndexes = CollapsibleButtonView.indexPathValueFromNestedArrays(this.state.selectedStates, clonedIndexPath);
      } else {
        newProps.onClick = this.wrapOnClick(child);
        newProps.isSelected = CollapsibleButtonView.indexPathValueFromNestedArrays(this.state.selectedStates, clonedIndexPath);
      }

      if (child.props.children) {
        this.wrapChildComponents(child.props.children, clonedIndexPath);
      }

      return React.cloneElement(child, newProps);
    });
  }

  render() {
    const { children,
            alignment,
            ...customProps } = this.props;

    const listClassNames = classNames([
        'terra-CollapsibleButtonView',
        { [`terra-CollapsibleButtonView-${alignment}`]: alignment },
        customProps.className,
      ]);

    const wrappedChildren = this.wrapChildComponents(children, []);
    const visibleChildren = this.visibleChildComponents(wrappedChildren);
    const hiddenChildren = this.hiddenChildComponents(wrappedChildren);

    let toggle;
    if (hiddenChildren.length > 0) {
      toggle = this.toggleButton;
    }

    let hiddenSection;
    if (this.state.toggleOpen) {
      hiddenSection = <div className="terra-CollapsibleButtonView-hiddenArea">{hiddenChildren}</div>;
    }

    return (
      <div className="terra-CollapsibleButtonView-totallyTemporary">
        <div className="terra-CollapsibleButtonView">
          <div className="terra-CollapsibleButtonView-container" ref={this.setContainer}>
            {visibleChildren.map((child, childIndex) => {
              const childKey = childIndex;
              return (
                <div className="terra-CollapsibleButtonView-item" key={childKey}>
                  {child}
                </div>
              );
            })}
          </div>
          <div className="terra-CollapsibleButtonView-toggle">
            {toggle}
          </div>
        </div>
        {hiddenSection}
      </div>
    );
  }
}

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;
CollapsibleButtonView.Item = Item;
CollapsibleButtonView.Group = Group;

export default CollapsibleButtonView;

