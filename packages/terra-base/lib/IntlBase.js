'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraI18n = require('terra-i18n');

var _BaseStyles = require('./BaseStyles');

var _BaseStyles2 = _interopRequireDefault(_BaseStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  locale: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired,
  customMessages: _react2.default.PropTypes.object
};

var defaultProps = {
  locale: 'en',
  customMessages: {}
};

var IntlBase = function (_React$Component) {
  _inherits(IntlBase, _React$Component);

  function IntlBase(props) {
    _classCallCheck(this, IntlBase);

    var _this = _possibleConstructorReturn(this, (IntlBase.__proto__ || Object.getPrototypeOf(IntlBase)).call(this, props));

    _this.state = {
      load: false,
      locale: props.locale,
      messages: {}
    };
    return _this;
  }

  _createClass(IntlBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _terraI18n.i18nLoader)(this.props.locale, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.load) return null;

      var _props = this.props,
          locale = _props.locale,
          customMessages = _props.customMessages,
          customProps = _objectWithoutProperties(_props, ['locale', 'customMessages']);

      var messages = _extends({}, this.state.messages, customMessages);

      return _react2.default.createElement(
        _terraI18n.I18nProvider,
        {
          locale: this.state.locale,
          messages: messages
        },
        _react2.default.createElement(
          _BaseStyles2.default,
          customProps,
          this.props.children
        )
      );
    }
  }]);

  return IntlBase;
}(_react2.default.Component);

IntlBase.propTypes = propTypes;

IntlBase.defaultProps = defaultProps;

exports.default = IntlBase;