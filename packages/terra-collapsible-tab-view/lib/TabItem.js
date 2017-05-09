'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./TabItem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Sets the button text
   */
  text: _react.PropTypes.string,
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: _react.PropTypes.bool
};

var defaultProps = {
  text: '',
  isSelected: false
};

var TabItem = function TabItem(_ref) {
  var text = _ref.text,
      isSelected = _ref.isSelected,
      customProps = _objectWithoutProperties(_ref, ['text', 'isSelected']);

  var buttonClassName = (0, _classnames2.default)(['terra-CollapsibleTabItem', { 'terra-CollapsibleTabItem--selected': isSelected }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: buttonClassName }),
    text
  );
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

exports.default = TabItem;