import React from 'react';
import PropTypes from 'prop-types';
import PopupPresenter from 'terra-popup-presenter';
import classNames from 'classnames';
import List from 'terra-list';
import 'terra-base/lib/baseStyles';
import './MenuItem.scss';

const propTypes = {
  display: PropTypes.element,
  isSelected: PropTypes.bool,
  children: PropTypes.element,
  isListStyle: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  isListStyle: false,
};

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.state = { isSelected: false };
  }

  handleRequestClose() {
    this.setState({ isSelected: false });
  }

  handleOnClick() {
    if (this.props.children) {
      this.setState({ isSelected: true });
    }
  }

  wrapOnClick() {
    const onClick = this.props.display.props.onClick;
    return (event) => {
      this.handleOnClick(event);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const { display, isSelected, children, isListStyle, ...customProps } = this.props;
    const menuItemClassName = classNames([
      'terra-MenuItem',
      customProps.className,
    ]);

    let target = React.cloneElement(display, { onClick: this.wrapOnClick() });
    if (isListStyle) {
      target = <List.Item content={<div>{display.props.text}</div>} onClick={this.wrapOnClick()} />;
    }

    const toggle = (
      <PopupPresenter
        content={children}
        contentAttachment="bottom center"
        isOpen={this.state.isSelected}
        target={target}
        onRequestClose={this.handleRequestClose}
        showArrow
      />
    );

    return (
      <div {...customProps} className={menuItemClassName}>
        {toggle}
      </div>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
