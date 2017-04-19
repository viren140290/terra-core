import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Item from './CollapsibleButtonItem';
import './CollapsibleButtonGroup.scss';

const propTypes = {
  /**
   * The initial state of selected indexes for the group.
   **/
  selectedIndexes: PropTypes.array,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: PropTypes.bool,
  /**
   * Indicates if the button group should display in list style.
   **/
  isListStyle: PropTypes.bool,
  /**
   * Callback function when the state changes
   **/
  onChange: PropTypes.func,
  /**
   * Child nodes
   **/
  children: PropTypes.node,
};

const defaultProps = {
  selectedIndexes: [],
  isSelectable: false,
  isListStyle: false,
  onChange: undefined,
  children: undefined,
};

class CollapsibleButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event, index) {
    if (this.props.selectedIndexes[index] !== true) {
      if (this.props.onChange) {
        const newSelections = this.props.selectedIndexes.map((value, i) => {
          return i === index;
        });
        this.props.onChange(event, newSelections);
      }
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

  render() {
    const {selectedIndexes, isSelectable, isListStyle, onChange, children, ...customProps } = this.props;
    const groupClassNames = classNames(['terra-CollapsibleButtonGroup',
      { 'terra-CollapsibleButtonGroup--listStyle': isListStyle },
      customProps.className,
    ]);

    const wrappedChildren = children.map((child, index) => {
      if (isSelectable) {
        return React.cloneElement(child, {onClick: this.wrapOnClick(child, index)});
      }
      return child;
    });

    return (
      <div {...customProps} className={groupClassNames}>
        {wrappedChildren}
      </div>
    );
  }
}

CollapsibleButtonGroup.propTypes = propTypes;
CollapsibleButtonGroup.defaultProps = defaultProps;

export default CollapsibleButtonGroup;

