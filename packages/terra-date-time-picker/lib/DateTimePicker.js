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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('terra-base/lib/baseStyles');

var _DatePicker = require('terra-date-picker/src/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimeInput = require('terra-time-input/src/TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _DateTimeUtil = require('./DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

require('./DateTimePicker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  dateInputAttributes: _propTypes2.default.object,
  /**
   * An ISO 8601 string representation of the end date/time for a date range.
   */
  endDateTime: _propTypes2.default.string,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: _propTypes2.default.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: _propTypes2.default.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: _propTypes2.default.bool,
  /**
   * Indicates whether or not this component is UTC aware. Default is true.
   */
  isUTC: _propTypes2.default.bool,
  /**
   * An ISO 8601 string representation of the maximum date/time that can be entered.
   */
  maxDateTime: _propTypes2.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be entered.
   */
  minDateTime: _propTypes2.default.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onDateChange: _propTypes2.default.func,
  /**
   * A callback function to execute when a valid time is entered.
   */
  onTimeChange: _propTypes2.default.func,
  /**
   * An ISO 8601 string representation of the start date/time for a date range.
   */
  startDateTime: _propTypes2.default.string,
  /**
   * Custom input attributes to apply to the time input.
   */
  timeInputAttributes: _propTypes2.default.object,
  /**
   * An ISO 8601 string representation of the initial default date/time to show in the date and time inputs.
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false,
  isUTC: true,
  value: undefined
};

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    // const data = DateTimeUtil.formatISO8601DateTime(props.value, 'MM/DD/YYYY', 'HH:mm');

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get date format from i18n
      timeFormat: 'HH:mm', // TODO: Get time format from i18n
      // dateValue: props.value,
      // timeValue: data.time,
      dateTime: (0, _moment2.default)(props.value)
    };

    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'handleDateChange',
    value: function handleDateChange(date, event) {
      // this.setState({
      //   dateValue: date,
      // });

      debugger;

      if (this.props.onDateChange) {
        this.props.onDateChange(date, event);
      }
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(time, event) {
      // this.setState({
      //   timeValue: time,
      // });

      debugger;

      var dateTimeMoment = _DateTimeUtil2.default.updateTime(time, this.state.dateTime);

      if (this.props.onTimeChange) {
        this.props.onTimeChange(time, event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dateInputAttributes = _props.dateInputAttributes,
          endDateTime = _props.endDateTime,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          includeDates = _props.includeDates,
          isUTC = _props.isUTC,
          maxDateTime = _props.maxDateTime,
          minDateTime = _props.minDateTime,
          isEndDateRange = _props.isEndDateRange,
          isStartDateRange = _props.isStartDateRange,
          onDateChange = _props.onDateChange,
          onTimeChange = _props.onTimeChange,
          startDateTime = _props.startDateTime,
          timeInputAttributes = _props.timeInputAttributes,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['dateInputAttributes', 'endDateTime', 'excludeDates', 'filterDate', 'includeDates', 'isUTC', 'maxDateTime', 'minDateTime', 'isEndDateRange', 'isStartDateRange', 'onDateChange', 'onTimeChange', 'startDateTime', 'timeInputAttributes', 'value']);

      // const endDateTimeData = DateTimeUtil.formatISO8601DateTime(endDateTime, 'MM/DD/YYYY', 'HH:mm');

      // const data = DateTimeUtil.formatISO8601DateTime(value, 'MM/DD/YYYY', 'HH:mm');

      debugger;

      return _react2.default.createElement(
        'div',
        { className: 'terra-DateTimePicker' },
        _react2.default.createElement(_DatePicker2.default, _extends({}, customProps, {
          inputAttributes: dateInputAttributes,
          selectedDate: value,
          endDate: endDateTime,
          excludeDates: excludeDates,
          filterDate: filterDate,
          includeDates: includeDates,
          maxDate: maxDateTime,
          minDate: minDateTime,
          isEndDateRange: isEndDateRange,
          isStartDateRange: isStartDateRange,
          startDate: startDateTime,
          onChange: this.handleDateChange
        })),
        _react2.default.createElement(_TimeInput2.default, _extends({}, customProps, {
          inputAttributes: timeInputAttributes,
          value: value,
          onChange: this.handleTimeChange
        }))
      );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

exports.default = DateTimePicker;