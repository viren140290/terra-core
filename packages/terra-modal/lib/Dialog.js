'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _close = require('terra-icon/lib/icon/themeable/close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The <Dialog/> component contains the information in a modal, including header/body/footer.
 * It supports scrolling of body content and fixed footer at the bottom if the body overflows.
 * It supports full-screen dialog and sizes with max-width at different breakpoints.
 */
var propTypes = {
  /**
   * Set aria-label for modal dialog
   */
  ariaLabel: _react.PropTypes.string.isRequired,
  /**
   * Set modal dialog to full screen
   */
  isFullScreen: _react.PropTypes.bool,
  /**
   * Set the max-width for modal dialog
   */
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Set the height of modal dialog in px, max-height = windows.height * 85
   */
  height: _react.PropTypes.number,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: _react.PropTypes.func.isRequired,
  /**
   * Displays close button on the top right(ltr) of container
   */
  hasCloseButton: _react.PropTypes.bool,
  /**
   * Modal header
   */
  header: _react.PropTypes.element,
  /**
  * Modal body
  */
  body: _react.PropTypes.element,
  /**
  * Modal footer
  */
  footer: _react.PropTypes.element
};

var defaultProps = {
  isFullScreen: false,
  size: 'medium',
  hasCloseButton: true
};

var Dialog = function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this));

    _this.state = {};
    _this.updateBodyHeight = _this.updateBodyHeight.bind(_this);
    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateBodyHeight();
      window.addEventListener('resize', this.updateBodyHeight);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateBodyHeight);
    }
  }, {
    key: 'updateBodyHeight',
    value: function updateBodyHeight() {
      var headerHeight = this.dialog.firstElementChild.offsetHeight;
      var footerHeight = this.dialog.lastElementChild.offsetHeight;
      var headerfooter = headerHeight + footerHeight;
      if (this.props.isFullScreen) {
        this.setState({
          bodyHeight: window.innerHeight - headerfooter,
          bodyMaxHeight: undefined
        });
      } else if (this.props.height) {
        var height = Math.min(this.props.height - headerfooter, window.innerHeight * 0.85 - headerfooter);
        this.setState({
          bodyHeight: height,
          bodyMaxHeight: undefined
        });
      } else {
        this.setState({
          bodyMaxHeight: window.innerHeight * 0.85 - headerfooter,
          bodyHeight: undefined
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var bodyStyle = {
        maxHeight: this.state.bodyMaxHeight,
        height: this.state.bodyHeight
      };
      var dialogClass = (0, _classnames2.default)('terra-Modal-dialog', 'terra-Modal--' + this.props.size, { 'terra-Modal--fullScreen': this.props.isFullScreen });
      return _react2.default.createElement(
        'div',
        {
          role: 'dialog',
          tabIndex: -1,
          'aria-label': this.props.ariaLabel,
          className: dialogClass,
          ref: function ref(dialog) {
            _this2.dialog = dialog;
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'terra-Modal-header' },
          _react2.default.createElement(
            'div',
            null,
            this.props.header
          ),
          this.props.hasCloseButton && _react2.default.createElement(_terraButton2.default, {
            'aria-label': 'modal-close',
            title: 'modal-close',
            className: 'terra-Modal--close',
            icon: _react2.default.createElement(_close2.default, null),
            onClick: this.props.onRequestClose
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-Modal-body', style: bodyStyle },
          this.props.body
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.footer
        )
      );
    }
  }]);

  return Dialog;
}(_react2.default.Component);

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

exports.default = Dialog;