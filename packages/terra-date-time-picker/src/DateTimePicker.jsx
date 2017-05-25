import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import DatePicker from 'terra-date-picker/src/DatePicker';
import TimeInput from 'terra-time-input/src/TimeInput';
import DateTimeUtil from './DateTimeUtil';
import './DateTimePicker.scss';

const propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  dateInputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the end date/time for a date range.
   */
  endDateTime: PropTypes.string,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: PropTypes.bool,
  /**
   * Indicates whether or not this component is UTC aware. Default is true.
   */
  isUTC: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the maximum date/time that can be entered.
   */
  maxDateTime: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be entered.
   */
  minDateTime: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onDateChange: PropTypes.func,
  /**
   * A callback function to execute when a valid time is entered.
   */
  onTimeChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the start date/time for a date range.
   */
  startDateTime: PropTypes.string,
  /**
   * Custom input attributes to apply to the time input.
   */
  timeInputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the initial default date/time to show in the date and time inputs.
   */
  value: PropTypes.string,
};

const defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false,
  isUTC: true,
  value: undefined,
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    // const data = DateTimeUtil.formatISO8601DateTime(props.value, 'MM/DD/YYYY', 'HH:mm');

    this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get date format from i18n
      timeFormat: 'HH:mm', // TODO: Get time format from i18n
      // dateValue: props.value,
      // timeValue: data.time,
      dateTime: moment(props.value),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDateChange(date, event) {
    // this.setState({
    //   dateValue: date,
    // });

    debugger;


    if (this.props.onDateChange) {
      this.props.onDateChange(date, event);
    }
  }

  handleTimeChange(time, event) {
    // this.setState({
    //   timeValue: time,
    // });

    debugger;

    const dateTimeMoment = DateTimeUtil.updateTime(time, this.state.dateTime);

    if (this.props.onTimeChange) {
      this.props.onTimeChange(time, event);
    }
  }

  render() {
    const {
      dateInputAttributes,
      endDateTime,
      excludeDates,
      filterDate,
      includeDates,
      isUTC,
      maxDateTime,
      minDateTime,
      isEndDateRange,
      isStartDateRange,
      onDateChange,
      onTimeChange,
      startDateTime,
      timeInputAttributes,
      value,
      ...customProps
    } = this.props;

    // const endDateTimeData = DateTimeUtil.formatISO8601DateTime(endDateTime, 'MM/DD/YYYY', 'HH:mm');

    // const data = DateTimeUtil.formatISO8601DateTime(value, 'MM/DD/YYYY', 'HH:mm');

    debugger;

    return (<div className="terra-DateTimePicker">
      <DatePicker
        {...customProps}
        inputAttributes={dateInputAttributes}
        selectedDate={value}
        endDate={endDateTime}
        excludeDates={excludeDates}
        filterDate={filterDate}
        includeDates={includeDates}
        maxDate={maxDateTime}
        minDate={minDateTime}
        isEndDateRange={isEndDateRange}
        isStartDateRange={isStartDateRange}
        startDate={startDateTime}
        onChange={this.handleDateChange}
      />
      <TimeInput
        {...customProps}
        inputAttributes={timeInputAttributes}
        value={value}
        onChange={this.handleTimeChange}
      />
    </div>);
  }
}

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

export default DateTimePicker;
