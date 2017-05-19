'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: _propTypes2.default.node.isRequired,
  /**
   * Expands or collapses content
   **/
  isOpen: _propTypes2.default.bool
};

var defaultProps = {
  children: null,
  isOpen: false
};

var Toggler = function Toggler(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['isOpen', 'children']);

  var togglerClass = (0, _classnames2.default)(['terra-Toggler', customProps.className]);

  if (!isOpen) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: togglerClass }),
    children
  );
};

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

exports.default = Toggler;