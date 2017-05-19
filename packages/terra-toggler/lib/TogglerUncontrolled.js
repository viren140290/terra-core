'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Toggler = require('./Toggler');

var _Toggler2 = _interopRequireDefault(_Toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: _propTypes2.default.node.isRequired,
  /**
   * Expands or collapses content
   **/
  isOpen: _propTypes2.default.bool,
  /**
   * Button content
   **/
  buttonContent: _propTypes2.default.node,
  /**
   * Function called when toggler opens
   **/
  onOpen: _propTypes2.default.func,
  /**
   * Function called when toggler closes
   **/
  onClose: _propTypes2.default.func,
  /**
   * CSS classnames that are append to the button
   **/
  classNameButton: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the toggler
   **/
  classNameToggler: _propTypes2.default.string
};

var defaultProps = {
  buttonContent: null,
  children: null,
  isOpen: false
};

var TogglerUncontrolled = function (_React$Component) {
  _inherits(TogglerUncontrolled, _React$Component);

  function TogglerUncontrolled() {
    _classCallCheck(this, TogglerUncontrolled);

    var _this = _possibleConstructorReturn(this, (TogglerUncontrolled.__proto__ || Object.getPrototypeOf(TogglerUncontrolled)).call(this));

    _this.state = { isOpen: false };
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(TogglerUncontrolled, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      this.setState({ isOpen: !this.state.isOpen });
      if (!this.state.isOpen && this.props.onOpen) {
        this.props.onOpen();
      } else if (this.state.isOpen && this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          buttonContent = _props.buttonContent,
          isOpen = _props.isOpen,
          children = _props.children,
          classNameButton = _props.classNameButton,
          classNameToggler = _props.classNameToggler,
          onOpen = _props.onOpen,
          onClose = _props.onClose,
          customProps = _objectWithoutProperties(_props, ['buttonContent', 'isOpen', 'children', 'classNameButton', 'classNameToggler', 'onOpen', 'onClose']);

      var buttonClass = (0, _classnames2.default)(['terra-Toggler-button', classNameButton]);

      var togglerClass = (0, _classnames2.default)(['terra-Toggler-uncontrolled', classNameToggler]);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _terraButton2.default,
          { onClick: this.handleOnClick, 'aria-expanded': this.state.isOpen, className: buttonClass },
          buttonContent
        ),
        _react2.default.createElement(
          _Toggler2.default,
          _extends({ isOpen: this.state.isOpen }, customProps, { className: togglerClass }),
          children
        )
      );
    }
  }]);

  return TogglerUncontrolled;
}(_react2.default.Component);

TogglerUncontrolled.propTypes = propTypes;
TogglerUncontrolled.defaultProps = defaultProps;

exports.default = TogglerUncontrolled;