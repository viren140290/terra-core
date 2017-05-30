'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = require('./MenuItemGroup');

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

var _MenuToggle = require('./MenuToggle');

var _MenuToggle2 = _interopRequireDefault(_MenuToggle);

require('terra-base/lib/baseStyles');

require('./Menu.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node.isRequired,
  alignment: _propTypes2.default.oneOf(['alignStart', 'alignEnd'])
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.visibleChildComponents = _this.visibleChildComponents.bind(_this);
    _this.hiddenChildComponents = _this.hiddenChildComponents.bind(_this);
    _this.state = {
      hiddenIndexes: [],
      toggleOpen: false,
      toggleHidden: false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.setState({ hiddenIndexes: [], toggleOpen: _this2.state.toggleOpen, toggleHidden: false });
          _this2.forceUpdate();
          _this2.handleResize(entries[0].contentRect.width);
        });
        this.resizeObserver.observe(this.container);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        this.resizeObserver.disconnect(this.container);
        this.container = null;
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      // do calculation here
      var availableWidth = width;
      var hiddenIndexes = [];
      var calcWidth = 0;

      for (var i = 0; i < this.props.children.length; i += 1) {
        var child = this.container.children[i];
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
        this.setState({ toggleOpen: false, hiddenIndexes: hiddenIndexes });
      }
    }
  }, {
    key: 'visibleChildComponents',
    value: function visibleChildComponents(children) {
      var visibleChildren = [];
      for (var i = 0; i < children.length; i += 1) {
        if (this.state.hiddenIndexes.indexOf(i) < 0) {
          visibleChildren.push(children[i]);
        }
      }
      return visibleChildren;
    }
  }, {
    key: 'hiddenChildComponents',
    value: function hiddenChildComponents(children) {
      var indexes = this.state.hiddenIndexes;
      var hiddenChildren = [];
      for (var i = 0; i < indexes.length; i += 1) {
        hiddenChildren.push(_react2.default.cloneElement(children[indexes[i]], { isListStyle: true }));
      }
      return hiddenChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['children']);

      var visibleChildren = this.visibleChildComponents(children);
      var hiddenChildren = this.hiddenChildComponents(children);
      var menuClassName = (0, _classnames2.default)(['terra-Menu', customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: menuClassName }),
        _react2.default.createElement(
          'div',
          { className: 'terra-Menu-container', ref: this.setContainer },
          visibleChildren
        ),
        _react2.default.createElement(
          _MenuToggle2.default,
          null,
          hiddenChildren
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = propTypes;

Menu.Item = _MenuItem2.default;

Menu.Group = _MenuItemGroup2.default;

exports.default = Menu;