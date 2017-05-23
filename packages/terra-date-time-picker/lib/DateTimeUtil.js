'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTimeUtil = function () {
  function DateTimeUtil() {
    _classCallCheck(this, DateTimeUtil);
  }

  _createClass(DateTimeUtil, null, [{
    key: 'formatISO8601DateTime',


    /* Takes a supported ISO8601 string and formats it based on the provided date and time formats.
       :dateTime (String) - The ISO8601 string representation of the datetime to format.
       :dateFormat (String) - The format to format the date.
       :timeFormat (String) - The format to format the time.
        Returns a hash containing the formatted date and time when a valid ISO8601 date time string is passed.
       Returns empty hash when invalid datetime is passed.
      */
    value: function formatISO8601DateTime(dateTime, dateFormat, timeFormat) {
      if (!dateTime) {
        return {};
      }

      var dateTimeMoment = (0, _moment2.default)(dateTime);
      var data = {};

      if (dateTimeMoment.isValid()) {
        if (dateFormat) {
          data.date = dateTimeMoment.format(dateFormat);
        }

        if (timeFormat) {
          data.time = dateTimeMoment.format(timeFormat);
        }
      }

      return data;
    }

    // Filters out any invalid dates in the provided list of dates and returns a list of moment objects representation of the valid dates

  }, {
    key: 'filterInvalidDates',
    value: function filterInvalidDates(dates, format) {
      var momentDates = [];

      if (dates) {
        var index = 0;
        for (index = 0; index < dates.length; index += 1) {
          var momentDate = (0, _moment2.default)(dates[index], format);
          if (momentDate.isValid()) {
            momentDates.push(momentDate);
          }
        }
      }

      return momentDates.length > 0 ? momentDates : dates;
    }
  }]);

  return DateTimeUtil;
}();

exports.default = DateTimeUtil;