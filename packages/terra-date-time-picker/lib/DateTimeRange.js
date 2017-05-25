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

var _DateTimePicker = require('./DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * An ISO 8601 string representation of the end date/time for a date range.
   */
  endDateTime: _propTypes2.default.string,
  /**
   * An ISO 8601 string representation of the start date/time for a date range.
   */
  startDateTime: _propTypes2.default.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onDateChange: _propTypes2.default.func,
  /**
   * A callback function to execute when a valid time is entered.
   */
  onTimeChange: _propTypes2.default.func
};

var DateTimeRange = function (_React$Component) {
  _inherits(DateTimeRange, _React$Component);

  function DateTimeRange(props) {
    _classCallCheck(this, DateTimeRange);

    var _this = _possibleConstructorReturn(this, (DateTimeRange.__proto__ || Object.getPrototypeOf(DateTimeRange)).call(this, props));

    _this.state = {
      format: 'MM/DD/YYYY', // TODO: Get the format from i18n
      startDateTime: props.startDateTime,
      endDateTime: props.endDateTime
    };
    _this.handleDateChangeStart = _this.handleDateChangeStart.bind(_this);
    _this.handleDateChangeEnd = _this.handleDateChangeEnd.bind(_this);
    _this.handleTimeChangeStart = _this.handleTimeChangeStart.bind(_this);
    _this.handleTimeChangeEnd = _this.handleTimeChangeEnd.bind(_this);

    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    return _this;
  }

  _createClass(DateTimeRange, [{
    key: 'handleDateChange',
    value: function handleDateChange(_ref) {
      var _ref$startDate = _ref.startDate,
          startDate = _ref$startDate === undefined ? this.state.startDateTime : _ref$startDate,
          _ref$endDate = _ref.endDate,
          endDate = _ref$endDate === undefined ? this.state.endDateTime : _ref$endDate,
          event = _ref.event;

      var startDateForRange = startDate;
      var endDateForRange = endDate;

      // It seems unnatural to swap the start and stop date when start and after stop. Perhaps, we should just display an error instead.
      // if (moment(startDateForRange).isAfter(moment(endDateForRange))) {
      //   [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
      // }

      this.setState({ startDateTime: startDateForRange, endDateTime: endDateForRange });

      if (this.props.onDateChange) {
        this.props.onDateChange(startDateForRange, endDateForRange, event);
      }
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(_ref2) {
      var _ref2$startTime = _ref2.startTime,
          startTime = _ref2$startTime === undefined ? this.state.startDateTime : _ref2$startTime,
          _ref2$endTime = _ref2.endTime,
          endTime = _ref2$endTime === undefined ? this.state.endDateTime : _ref2$endTime,
          event = _ref2.event;

      var startTimeForRange = startTime;
      var endTimeForRange = endTime;

      // if (moment(startTimeForRange).isAfter(moment(endTimeForRange))) {
      //   [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
      // }

      // this.setState({ startDateTime: startDateForRange, endDateTime: endDateForRange });

      // if (this.props.onChange) {
      //   this.props.onChange(startDateForRange, endDateForRange);
      // }

      if (this.props.onTimeChange) {
        this.props.onTimeChange(startTimeForRange, endTimeForRange, event);
      }
    }
  }, {
    key: 'handleDateChangeStart',
    value: function handleDateChangeStart(startDate, event) {
      this.handleDateChange({ startDate: startDate, event: event });
    }
  }, {
    key: 'handleDateChangeEnd',
    value: function handleDateChangeEnd(endDate, event) {
      this.handleDateChange({ endDate: endDate, event: event });
    }
  }, {
    key: 'handleTimeChangeStart',
    value: function handleTimeChangeStart(startTime, event) {
      this.handleTimeChange({ startTime: startTime, event: event });
    }
  }, {
    key: 'handleTimeChangeEnd',
    value: function handleTimeChangeEnd(endTime, event) {
      this.handleTimeChange({ endTime: endTime, event: event });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'terra-DateTimePicker-range' },
        _react2.default.createElement(_DateTimePicker2.default, _extends({}, this.props, {
          value: this.state.startDateTime,
          isStartDateRange: true,
          startDateTime: this.state.startDateTime,
          endDateTime: this.state.endDateTime,
          onDateChange: this.handleDateChangeStart,
          onTimeChange: this.handleTimeChangeStart
        })),
        _react2.default.createElement(_DateTimePicker2.default, _extends({}, this.props, {
          value: this.state.endDateTime,
          isEndDateRange: true,
          startDateTime: this.state.startDateTime,
          endDateTime: this.state.endDateTime,
          onDateChange: this.handleDateChangeEnd,
          onTimeChange: this.handleTimeChangeEnd
        }))
      );
    }
  }]);

  return DateTimeRange;
}(_react2.default.Component);

DateTimeRange.propTypes = propTypes;

exports.default = DateTimeRange;