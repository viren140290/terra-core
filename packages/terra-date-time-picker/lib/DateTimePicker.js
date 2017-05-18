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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('terra-base/lib/baseStyles');

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

var _DateUtil = require('terra-date-picker/lib/DateUtil');

var _DateUtil2 = _interopRequireDefault(_DateUtil);

var _terraTimeInput = require('terra-time-input');

var _terraTimeInput2 = _interopRequireDefault(_terraTimeInput);

require('./DateTimePicker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
     * An ISO 8601 string representation of the end date for a date range.
     */
  endDate: _propTypes2.default.string,
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
   * Custom input attributes to apply to the date input.
   */
  dateInputAttributes: _propTypes2.default.object,
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: _propTypes2.default.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: _propTypes2.default.bool,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: _propTypes2.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: _propTypes2.default.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _propTypes2.default.func,
  /**
   * An ISO 8601 string representation of the start date for a date range.
   */
  startDate: _propTypes2.default.string,
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
  value: undefined
};

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get date format from i18n
      timeFormat: 'HH:mm', // TODO: Get time format from i18n
      selectedDate: _DateUtil2.default.createSafeDate(props.value, 'MM/DD/YYYY')
    };

    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      date.hour(this.state.startDate.hour());
      date.minute(this.state.startDate.minute());

      this.setState({
        value: date
      });

      if (this.props.onChange) {
        var dateString = date && date.isValid() ? date.format(this.state.dateFormat) : '';
        this.props.onChange(dateString);
      }
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(event) {
      // Check if the time is a valid time using strict parsing.
      var targetMoment = (0, _moment2.default)(event.target.value, this.state.timeFormat, true);

      if (!targetMoment.isValid()) {
        return;
      }

      if (event.target.value === this.state.startDate.format(this.state.timeFormat)) {
        return;
      }

      var newDateTime = this.state.startDate.clone();
      newDateTime.hour(event.target.value.substring(0, 2));
      newDateTime.minute(event.target.value.substring(3, 5));

      this.setState({
        startDate: newDateTime
      });

      if (this.props.onChange) {
        this.props.onChange(newDateTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dateInputAttributes = _props.dateInputAttributes,
          endDate = _props.endDate,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          includeDates = _props.includeDates,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          isEndDateRange = _props.isEndDateRange,
          isStartDateRange = _props.isStartDateRange,
          startDate = _props.startDate,
          timeInputAttributes = _props.timeInputAttributes,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['dateInputAttributes', 'endDate', 'excludeDates', 'filterDate', 'includeDates', 'maxDate', 'minDate', 'isEndDateRange', 'isStartDateRange', 'startDate', 'timeInputAttributes', 'value']);

      return _react2.default.createElement(
        'div',
        { className: 'terra-DateTimePicker' },
        _react2.default.createElement(_terraDatePicker2.default, _extends({}, customProps, {
          inputAttributes: dateInputAttributes,
          selectedDate: this.state.value,
          endDate: endDate,
          excludeDates: excludeDates,
          filterDate: filterDate,
          includeDates: includeDates,
          maxDate: maxDate,
          minDate: minDate,
          isEndDateRange: isEndDateRange,
          isStartDateRange: isStartDateRange,
          startDate: startDate,
          onChange: this.handleDateChange
        })),
        _react2.default.createElement(_terraTimeInput2.default, _extends({}, customProps, {
          inputAttributes: timeInputAttributes,
          value: this.state.value,
          onChange: this.handleTimeChange
        }))
      );

      // return (
      //   (<ReactDatePicker
      //     {...customProps}
      //     onChange={this.handleChange}
      //     customInput={<DateInput />}
      //     endDate={endDate}
      //     excludeDates={excludeDates}
      //     filterDate={filterDate}
      //     includeDates={includeDates}
      //     maxDate={maxDate}
      //     minDate={minDate}
      //     selectsEnd={isEndDateRange}
      //     selectsStart={isStartDateRange}
      //     startDate={startDate}
      //     todayButton={todayString}
      //     withPortal
      //     dateFormatCalendar=" "
      //     dateFormat={momentDateFormat}
      //     fixedHeight
      //     locale={userLocale}
      //     placeholderText={momentDateFormat}
      //     dropdownMode={'select'}
      //     showMonthDropdown
      //     showYearDropdown
      //   />)
      // );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

exports.default = DateTimePicker;