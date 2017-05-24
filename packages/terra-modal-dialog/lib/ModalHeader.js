'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalDismiss = require('./ModalDismiss');

var _ModalDismiss2 = _interopRequireDefault(_ModalDismiss);

require('./ModalHeader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  children: null
};

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['children', 'onClick']);

  return _react2.default.createElement(
    'div',
    { className: 'terra-ModalDialog-header' },
    _react2.default.createElement(
      'div',
      _extends({ className: 'terra-ModalDialog-header-title' }, customProps),
      children
    ),
    _react2.default.createElement(_ModalDismiss2.default, { onClick: onClick })
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

exports.default = ModalHeader;