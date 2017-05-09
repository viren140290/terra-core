'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraPopupPresenter = require('terra-popup-presenter');

var _terraPopupPresenter2 = _interopRequireDefault(_terraPopupPresenter);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

require('./CollapsibleTabView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable no-debugger*/

var propTypes = {
  /**
   * The children to be placed within the button view.
   */
  children: _react.PropTypes.node,
  /**
   * The children to be placed within the button view.
   */
  alignment: _react.PropTypes.oneOf(['alignStart', 'alignEnd']),
  isTruncated: _react.PropTypes.bool
};

var defaultProps = {
  children: undefined,
  alignment: 'alignStart'
};

var CollapsibleTabView = function (_React$Component) {
  _inherits(CollapsibleTabView, _React$Component);

  _createClass(CollapsibleTabView, null, [{
    key: 'getSelectedIndex',
    value: function getSelectedIndex(children) {
      for (var i = 0; i < children.length; i += 1) {
        if (children[i].props.isSelected) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState(children) {
      var selectedTabIndex = CollapsibleTabView.getSelectedIndex(children);
      return { hideTabs: false, selectedTabIndex: selectedTabIndex, toggleOpen: false };
    }
  }]);

  function CollapsibleTabView(props) {
    _classCallCheck(this, CollapsibleTabView);

    var _this = _possibleConstructorReturn(this, (CollapsibleTabView.__proto__ || Object.getPrototypeOf(CollapsibleTabView)).call(this, props));

    _this.state = CollapsibleTabView.getInitialState(_this.props.children);
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.toggleButton = _react2.default.createElement(_terraButton2.default, { text: '\u2026', onClick: _this.handleButtonClick });
    return _this;
  }

  _createClass(CollapsibleTabView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.setState({ hideTabs: false, selectedStates: _this2.state.selectedStates, toggleOpen: _this2.state.toggleOpen });
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
        this.parentContainer = null;
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
      this.parentContainer = node.parentNode;
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ toggleOpen: true, hiddenIndexes: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ toggleOpen: false, hiddenIndexes: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      // do calculation here
      var widthToMeasure = width;
      var hideTabs = false;
      var calcWidth = 0;

      for (var i = 0; i < this.props.children.length; i += 1) {
        var child = this.container.children[i];
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
      this.setState({ toggleOpen: false, hideTabs: hideTabs, selectedStates: this.state.selectedStates });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      if (this.state.selectedIndex !== index) {
        this.setState({ toggleOpen: false, hideTabs: this.state.hideTabs, selectedIndex: index });
        this.props.onChange(event, index);
      } else {
        this.setState({ toggleOpen: false, hideTabs: this.state.hideTabs, selectedIndex: this.state.selectedIndex });
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item, index) {
      var _this3 = this;

      var onClick = item.props.onClick;
      return function (event) {
        _this3.handleOnClick(event, index);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'wrapChildComponents',
    value: function wrapChildComponents(children, indexPath) {
      var _this4 = this;

      return children.map(function (child, index) {
        var newProps = {};

        newProps.onClick = _this4.wrapOnClick(child, index);
        newProps.isSelected = index === _this4.state.selectedIndex;

        return _react2.default.cloneElement(child, newProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          alignment = _props.alignment,
          customProps = _objectWithoutProperties(_props, ['children', 'alignment']);

      var listClassNames = (0, _classnames2.default)(['terra-CollapsibleTabView', _defineProperty({}, 'terra-CollapsibleTabView-' + alignment, alignment), customProps.className]);

      var wrappedChildren = this.wrapChildComponents(children, []);

      var content = wrappedChildren.map(function (child, childIndex) {
        var childKey = childIndex;
        return _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleTabView-item', key: childKey },
          child
        );
      });

      var toggle = void 0;
      var style = void 0;
      if (this.state.hideTabs) {
        var constraints = [{ to: 'window', attachment: 'together' }];
        toggle = _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleTabView-toggle' },
          _react2.default.createElement(_terraPopupPresenter2.default, {
            constraints: constraints,
            content: _react2.default.createElement(
              'div',
              { style: { width: this.adjustedWith + 'px' } },
              wrappedChildren
            )
            // contentOffset="0 -20px"
            , contentAttachment: 'top right',
            isOpen: this.state.toggleOpen,
            target: this.toggleButton,
            targetAttachment: 'bottom right',
            onRequestClose: this.handleRequestClose,
            showArrow: false
          })
        );

        content = undefined;
        if (this.state.selectedIndex >= 0) {
          var child = wrappedChildren[this.state.selectedIndex];
          if (child) {
            content = _react2.default.cloneElement(child, { style: { width: '100%' } });
          }
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'terra-CollapsibleTabView' },
        _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleTabView-container', ref: this.setContainer },
          content
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleTabView-toggle' },
          toggle
        )
      );
    }
  }]);

  return CollapsibleTabView;
}(_react2.default.Component);

CollapsibleTabView.propTypes = propTypes;
CollapsibleTabView.defaultProps = defaultProps;
CollapsibleTabView.Item = _TabItem2.default;

exports.default = CollapsibleTabView;