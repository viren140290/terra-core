import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import 'terra-base/lib/baseStyles';


const propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  requestClose: PropTypes.func,
};

class MenuNavStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: this.props.children,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ stack: nextProps.children });
  }

  render() {
    const { children, onChange, requestClose, ...customProps } = this.props;
    const backButton = this.state.stack.length > 1 ? <Button icon={IconLeft} /> : null;

    return (
      <div {...customProps}>
        <h1>
          {backButton}
        </h1>
        {this.state.stack[this.state.stack.length - 1]}
      </div>

    );
  }
}

MenuNavStack.propTypes = propTypes;

export default MenuNavStack;
