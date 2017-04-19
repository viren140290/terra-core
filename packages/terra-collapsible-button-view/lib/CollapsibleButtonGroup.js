'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CollapsibleButtonItem = require('./CollapsibleButtonItem');

var _CollapsibleButtonItem2 = _interopRequireDefault(_CollapsibleButtonItem);

require('./CollapsibleButtonGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The initial state of selected indexes for the group.
   **/
  selectedIndexes: _react.PropTypes.array,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: _react.PropTypes.bool,
  /**
   * Indicates if the button group should display in list style.
   **/
  isListStyle: _react.PropTypes.bool,
  /**
   * Callback function when the state changes
   **/
  onChange: _react.PropTypes.func,
  /**
   * Child nodes
   **/
  children: _react.PropTypes.node
};

var defaultProps = {
  selectedIndexes: [],
  isSelectable: false,
  isListStyle: false,
  onChange: undefined,
  children: undefined
};

var CollapsibleButtonGroup = function (_React$Component) {
  _inherits(CollapsibleButtonGroup, _React$Component);

  function CollapsibleButtonGroup(props) {
    _classCallCheck(this, CollapsibleButtonGroup);

    var _this = _possibleConstructorReturn(this, (CollapsibleButtonGroup.__proto__ || Object.getPrototypeOf(CollapsibleButtonGroup)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(CollapsibleButtonGroup, [{
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      if (this.props.selectedIndexes[index] !== true) {
        if (this.props.onChange) {
          var newSelections = this.props.selectedIndexes.map(function (value, i) {
            return i === index;
          });
          this.props.onChange(newSelections);
        }
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item, index) {
      var _this2 = this;

      var onClick = item.props.onClick;
      return function (event) {
        _this2.handleOnClick(event, index);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          onChange = _props.onChange,
          isSelectable = _props.isSelectable,
          isListStyle = _props.isListStyle,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['onChange', 'isSelectable', 'isListStyle', 'children']);

      var groupClassNames = (0, _classnames2.default)(['terra-CollapsibleButtonGroup', customProps.className]);

      var wrappedChildren = children.map(function (child, index) {
        if (isSelectable) {
          return _react2.default.cloneElement(child, { onClick: _this3.wrapOnClick(child, index) });
        }
        return child;
      });

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: groupClassNames }),
        wrappedChildren
      );
    }
  }]);

  return CollapsibleButtonGroup;
}(_react2.default.Component);

CollapsibleButtonGroup.propTypes = propTypes;
CollapsibleButtonGroup.defaultProps = defaultProps;

exports.default = CollapsibleButtonGroup;