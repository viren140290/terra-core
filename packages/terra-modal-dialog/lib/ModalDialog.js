'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraModal = require('terra-modal');

var _terraModal2 = _interopRequireDefault(_terraModal);

var _ModalDialogHeader = require('./ModalDialogHeader');

var _ModalDialogHeader2 = _interopRequireDefault(_ModalDialogHeader);

var _ModalDialogContentHeader = require('./ModalDialogContentHeader');

var _ModalDialogContentHeader2 = _interopRequireDefault(_ModalDialogContentHeader);

var _ModalDialogContent = require('./ModalDialogContent');

var _ModalDialogContent2 = _interopRequireDefault(_ModalDialogContent);

var _ModalDialogFooter = require('./ModalDialogFooter');

var _ModalDialogFooter2 = _interopRequireDefault(_ModalDialogFooter);

require('./ModalDialog.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * String that labels the modal for screen readers
   **/
  ariaLabel: _propTypes2.default.string.isRequired,
  /**
   * Content inside the modal dialog
   **/
  children: _propTypes2.default.node.isRequired,
  /**
   * CSS classnames that are append to the modal
   **/
  classNameModal: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the overlay
   **/
  classNameOverlay: _propTypes2.default.string,
  /**
   * If set to true, the modal will close when the esc key is pressed
   **/
  closeOnEsc: _propTypes2.default.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal
   **/
  closeOnOutsideClick: _propTypes2.default.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes
   **/
  isFullscreen: _propTypes2.default.bool,
  /**
   * If set to true, the modal will rendered as opened
   **/
  isOpen: _propTypes2.default.bool.isRequired,
  /**
   * Function to set isOpen={false} and close the modal.
   **/
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * Role attribute on the modal dialog
   **/
  role: _propTypes2.default.string
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpen: false,
  role: 'document'
};

var ModalDialog = function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    _classCallCheck(this, ModalDialog);

    var _this = _possibleConstructorReturn(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this));

    _this.state = { height: '30px' };
    _this.calculateHeight = _this.calculateHeight.bind(_this);
    return _this;
  }

  _createClass(ModalDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculateHeight();
      window.addEventListener('resize', this.calculateHeight);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calculateHeight);
    }
  }, {
    key: 'calculateHeight',
    value: function calculateHeight() {
      // When the width <=767, the modal changes to fullscreen
      if (document.documentElement.clientWidth > 767) {
        this.setState({ height: document.documentElement.clientHeight - 100 });
      } else {
        this.setState({ height: null });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          children = _props.children,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          isFullscreen = _props.isFullscreen,
          isOpen = _props.isOpen,
          role = _props.role,
          onRequestClose = _props.onRequestClose,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'children', 'classNameModal', 'classNameOverlay', 'closeOnEsc', 'closeOnOutsideClick', 'isFullscreen', 'isOpen', 'role', 'onRequestClose']);

      var newHeight = { maxHeight: this.state.height };

      if (!isOpen) {
        return null;
      }

      return _react2.default.createElement(
        _terraModal2.default,
        {
          ariaLabel: ariaLabel,
          classNameModal: classNameModal,
          classNameOverlay: classNameOverlay,
          closeOnOutsideClick: closeOnOutsideClick,
          closeOnEsc: closeOnEsc,
          isFullscreen: isFullscreen,
          isOpen: isOpen,
          onRequestClose: onRequestClose,
          role: role
        },
        _react2.default.createElement(
          'div',
          _extends({ style: newHeight, className: 'terra-ModalDialog' }, customProps),
          children
        )
      );
    }
  }]);

  return ModalDialog;
}(_react2.default.Component);

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

ModalDialog.Header = _ModalDialogHeader2.default;
ModalDialog.ContentHeader = _ModalDialogContentHeader2.default;
ModalDialog.Content = _ModalDialogContent2.default;
ModalDialog.Footer = _ModalDialogFooter2.default;

exports.default = ModalDialog;