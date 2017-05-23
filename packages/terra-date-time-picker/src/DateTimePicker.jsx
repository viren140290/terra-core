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
   * A callback function to execute when a valid date or time is selected or entered.
   */
  onChange: PropTypes.func,
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

    const data = DateTimeUtil.formatISO8601DateTime(props.value, 'MM/DD/YYYY', 'HH:mm');

    this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get date format from i18n
      timeFormat: 'HH:mm', // TODO: Get time format from i18n
      dateValue: data.date,
      timeValue: data.time,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDateChange(date, event) {
    debugger;
    this.setState({
      dateValue: date,
    });

    if (this.props.onChange) {
      this.props.onChange(date, event);
    }
  }

  handleTimeChange(time, event) {
    debugger;
    this.setState({
      timeValue: time,
    });

    if (this.props.onChange) {
      this.props.onChange(time, event);
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
      startDateTime,
      timeInputAttributes,
      value,
      ...customProps
    } = this.props;

    // const endDateTimeData = DateTimeUtil.formatISO8601DateTime(endDateTime, 'MM/DD/YYYY', 'HH:mm');

    return (<div className="terra-DateTimePicker">
      <DatePicker
        {...customProps}
        inputAttributes={dateInputAttributes}
        selectedDate={this.state.dateValue}
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
        value={this.state.timeValue}
        onChange={this.handleTimeChange}
      />
    </div>);

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
}

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

export default DateTimePicker;
