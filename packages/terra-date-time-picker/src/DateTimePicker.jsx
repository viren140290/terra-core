import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import DatePicker from 'terra-date-picker';
import DateUtil from 'terra-date-picker/lib/DateUtil'
import TimeInput from 'terra-time-input';
import './DateTimePicker.scss';

const propTypes = {
/**
   * An ISO 8601 string representation of the end date for a date range.
   */
  endDate: PropTypes.string,
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
   * Custom input attributes to apply to the date input.
   */
  dateInputAttributes: PropTypes.object,
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the start date for a date range.
   */
  startDate: PropTypes.string,
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
  value: undefined,
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get date format from i18n
      timeFormat: 'HH:mm', // TODO: Get time format from i18n
      selectedDate: DateUtil.createSafeDate(props.value, 'MM/DD/YYYY'),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDateChange(date) {
    date.hour(this.state.startDate.hour());
    date.minute(this.state.startDate.minute());

    this.setState({
      value: date,
    });

    if (this.props.onChange) {
      const dateString = date && date.isValid() ? date.format(this.state.dateFormat) : '';
      this.props.onChange(dateString);
    }
  }

  handleTimeChange(event) {
    // Check if the time is a valid time using strict parsing.
    const targetMoment = moment(event.target.value, this.state.timeFormat, true);

    if (!targetMoment.isValid()) {
      return;
    }

    if (event.target.value === this.state.startDate.format(this.state.timeFormat)) {
      return;
    }

    const newDateTime = this.state.startDate.clone();
    newDateTime.hour(event.target.value.substring(0, 2));
    newDateTime.minute(event.target.value.substring(3, 5));

    this.setState({
      startDate: newDateTime,
    });

    if (this.props.onChange) {
      this.props.onChange(newDateTime);
    }
  }

  render() {
    const {
      dateInputAttributes,
      endDate,
      excludeDates,
      filterDate,
      includeDates,
      maxDate,
      minDate,
      isEndDateRange,
      isStartDateRange,
      startDate,
      timeInputAttributes,
      value,
      ...customProps
    } = this.props;

    return (<div className="terra-DateTimePicker">
      <DatePicker
        {...customProps}
        inputAttributes={dateInputAttributes}
        selectedDate={this.state.value}
        endDate={endDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        includeDates={includeDates}
        maxDate={maxDate}
        minDate={minDate}
        isEndDateRange={isEndDateRange}
        isStartDateRange={isStartDateRange}
        startDate={startDate}
        onChange={this.handleDateChange}
      />
      <TimeInput
        {...customProps}
        inputAttributes={timeInputAttributes}
        value={this.state.value}
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
