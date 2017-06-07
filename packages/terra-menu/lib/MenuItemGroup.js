'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

var _SingleSelectList = require('terra-list/lib/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

require('terra-base/lib/baseStyles');

require('./MenuItemGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  isSelectable: _propTypes2.default.bool,
  isButtonStyle: _propTypes2.default.bool,
  children: _propTypes2.default.array
};

var defaultProps = {
  isSelectable: false,
  isButtonStyle: false,
  children: []
};

var MenuItemGroup = function MenuItemGroup(_ref) {
  var isSelectable = _ref.isSelectable,
      isButtonStyle = _ref.isButtonStyle,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['isSelectable', 'isButtonStyle', 'children']);

  var attributes = _extends({}, customProps);
  var items = children.map(function (child) {
    return _react2.default.cloneElement(child, {
      isButtonStyle: isButtonStyle,
      isSelectable: isSelectable,
      isGroupItem: true
    });
  });

  var group = void 0;
  if (isButtonStyle) {
    group = _react2.default.createElement(
      _terraButtonGroup2.default,
      _extends({}, attributes, { isSelectable: isSelectable }),
      items
    );
  } else {
    group = _react2.default.createElement(
      _SingleSelectList2.default,
      attributes,
      items
    );
  }

  return group;
};

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.defaultProps = defaultProps;

exports.default = MenuItemGroup;