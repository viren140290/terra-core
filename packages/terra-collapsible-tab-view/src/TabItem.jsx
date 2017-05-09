import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './TabItem.scss';

const propTypes = {
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: PropTypes.bool,
};

const defaultProps = {
  text: '',
  isSelected: false,
};

const TabItem = ({ 
  text,
  isSelected,
  ...customProps, 
}) => {
  const buttonClassName = classNames([
    'terra-CollapsibleTabItem',
    { 'terra-CollapsibleTabItem--selected': isSelected },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={buttonClassName}>
      {text}
    </div>);
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

export default TabItem;
