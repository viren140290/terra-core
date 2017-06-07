'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

require('terra-base/lib/baseStyles');

require('./MenuItem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Sets the item's text
   **/
  text: _propTypes2.default.string,

  /**
   * An optional icon. Nested inline with the text when provided
   **/
  icon: _propTypes2.default.element,

  /**
   * Reverses the position of the icon and text
   **/
  isReversed: _propTypes2.default.bool,

  /**
   * Indicates if the item is selected. IsSelectable must also be true for this to work.
   **/
  isSelected: _propTypes2.default.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   **/
  subMenuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),

  /**
   * This should only be set if the item is being placed in a collapsible menu view, or as the `target` in a menu.
   **/
  isButtonStyle: _propTypes2.default.bool,

  /**
   * Private.
   **/
  isGroupItem: _propTypes2.default.bool
};

var defaultProps = {
  text: '',
  isReversed: false,
  isSelectable: false,
  isSelected: false,
  isButtonStyle: false,
  isGroupItem: false,
  subMenuItems: []
};

var MenuItem = function MenuItem(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      isReversed = _ref.isReversed,
      isSelectable = _ref.isSelectable,
      isSelected = _ref.isSelected,
      isButtonStyle = _ref.isButtonStyle,
      isGroupItem = _ref.isGroupItem,
      subMenuItems = _ref.subMenuItems,
      customProps = _objectWithoutProperties(_ref, ['text', 'icon', 'isReversed', 'isSelectable', 'isSelected', 'isButtonStyle', 'isGroupItem', 'subMenuItems']);

  var attributes = _extends({}, customProps);

  var item = void 0;
  if (isButtonStyle && isGroupItem) {
    item = _react2.default.createElement(_terraButtonGroup2.default.Button, _extends({}, attributes, { text: text, icon: icon, isSelected: isSelected }));
  } else if (isButtonStyle) {
    item = _react2.default.createElement(_terraButton2.default, _extends({}, attributes, { text: text, icon: icon, isReversed: isReversed }));
  } else {
    item = _react2.default.createElement(_terraList2.default.Item, _extends({}, attributes, {
      hasChevron: subMenuItems.length > 0,
      content: _react2.default.createElement(
        'div',
        null,
        text
      ),
      isSelectable: subMenuItems.length > 0 || isGroupItem
    }));
  }

  return item;
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

exports.default = MenuItem;