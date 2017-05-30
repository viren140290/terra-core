import React from 'react';
import Button from 'terra-button';
import List from 'terra-list';
import PropTypes from 'prop-types';
import PopupPresenter from 'terra-popup-presenter';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './MenuToggle.scss';

const propTypes = {
  toggleText: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.array,
};

const defaultProps = {
  toggleText: '...',
  isOpen: false,
  children: [],
};

class MenuToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = { isOpen: false };
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  handleOnClick() {
    if (this.props.children) {
      this.setState({ isOpen: true });
    }
  }

  render() {
    const { toggleText, isOpen, children, ...customProps } = this.props;
    const menuToggleClassName = classNames([
      'terra-MenuToggle',
      customProps.className,
    ]);

    const toggle = (
      <PopupPresenter
        content={<List isDivided>{children}</List>}
        contentAttachment="bottom center"
        isOpen={this.state.isOpen}
        target={<Button text={toggleText} onClick={this.handleOnClick} />}
        onRequestClose={this.handleRequestClose}
        showArrow
      />
    );

    return (
      <div {...customProps} className={menuToggleClassName}>
        {toggle}
      </div>
    );
  }
}

MenuToggle.propTypes = propTypes;
MenuToggle.defaultProps = defaultProps;

export default MenuToggle;
