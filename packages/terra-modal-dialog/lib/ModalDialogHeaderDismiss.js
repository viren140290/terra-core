'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

require('./ModalDialogDismiss.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  children: null
};

var ModalDialogDismiss = function ModalDialogDismiss(_ref) {
  var onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['onClick']);

  return _react2.default.createElement(
    _terraButton2.default,
    _extends({ variant: 'link', className: 'terra-ModalDialog-header-dismiss', onClick: onClick }, customProps),
    _react2.default.createElement(_IconClose2.default, null)
  );
};

ModalDialogDismiss.propTypes = propTypes;
ModalDialogDismiss.defaultProps = defaultProps;

exports.default = ModalDialogDismiss;