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

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

require('terra-base/lib/baseStyles');

require('./MenuItemGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  isListStyle: _propTypes2.default.bool
};

var defaultProps = {
  isListStyle: false
};

var MenuItemGroup = function MenuItemGroup(_ref) {
  var children = _ref.children,
      isListStyle = _ref.isListStyle,
      customProps = _objectWithoutProperties(_ref, ['children', 'isListStyle']);

  var menuItemGroupClassName = (0, _classnames2.default)(['terra-MenuItemGroup', customProps.className]);

  var items = children;
  var group = _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: menuItemGroupClassName }),
    items
  );

  if (isListStyle) {
    items = children.map(function (child) {
      return _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
          'div',
          null,
          child.props.display.props.text
        ) });
    });
    group = _react2.default.createElement(
      _terraList2.default,
      _extends({}, customProps, { className: 'terra-MenuItemGroup--list' }),
      items
    );
  }

  return group;
};

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.defaultProps = defaultProps;

exports.default = MenuItemGroup;