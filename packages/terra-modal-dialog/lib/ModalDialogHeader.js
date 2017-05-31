'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalDialogHeaderDismiss = require('./ModalDialogHeaderDismiss');

var _ModalDialogHeaderDismiss2 = _interopRequireDefault(_ModalDialogHeaderDismiss);

require('./ModalDialogHeader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  hasDismiss: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  children: null
};

var ModalDialogHeader = function ModalDialogHeader(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['children', 'onClick']);

  var dismissButton = onClick ? _react2.default.createElement(_ModalDialogHeaderDismiss2.default, { onClick: onClick }) : null;

  return _react2.default.createElement(
    'div',
    { className: 'terra-ModalDialog-header' },
    _react2.default.createElement(
      'div',
      _extends({ className: 'terra-ModalDialog-header-title' }, customProps),
      children
    ),
    dismissButton
  );
};

ModalDialogHeader.propTypes = propTypes;
ModalDialogHeader.defaultProps = defaultProps;

exports.default = ModalDialogHeader;