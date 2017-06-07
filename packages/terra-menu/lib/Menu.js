'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraPopupPresenter = require('terra-popup-presenter');

var _terraPopupPresenter2 = _interopRequireDefault(_terraPopupPresenter);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = require('./MenuItemGroup');

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

require('terra-base/lib/baseStyles');

require('./Menu.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  target: _propTypes2.default.element.isRequired,
  isOpen: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  isOpen: false,
  children: []
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.state = { isOpen: false };
    return _this;
  }

  _createClass(Menu, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      if (this.props.children) {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ isOpen: false });
      this.props.onRequestClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          target = _props.target,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['target', 'isOpen', 'onRequestClose', 'children']);

      var attributes = _extends({}, customProps);
      var menuClassName = (0, _classnames2.default)(['terra-Menu', attributes.className]);

      return _react2.default.createElement(_terraPopupPresenter2.default, {
        content: _react2.default.createElement(
          _terraList2.default,
          _extends({}, attributes, { className: menuClassName }),
          children
        ),
        contentAttachment: 'bottom center',
        isOpen: this.state.isOpen,
        target: _react2.default.cloneElement(target, { onClick: this.handleOnClick }),
        onRequestClose: this.handleRequestClose,
        showArrow: true
      });
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = _MenuItem2.default;
Menu.ItemGroup = _MenuItemGroup2.default;

exports.default = Menu;