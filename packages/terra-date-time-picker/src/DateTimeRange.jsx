import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import DateTimePicker from './DateTimePicker';

const propTypes = {
  /**
   * An ISO 8601 string representation of the end date/time for a date range.
   */
  endDateTime: PropTypes.string,
  /**
   * An ISO 8601 string representation of the start date/time for a date range.
   */
  startDateTime: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onDateChange: PropTypes.func,
  /**
   * A callback function to execute when a valid time is entered.
   */
  onTimeChange: PropTypes.func,
};

class DateTimeRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'MM/DD/YYYY', // TODO: Get the format from i18n
      startDateTime: props.startDateTime,
      endDateTime: props.endDateTime,
    };
    this.handleDateChangeStart = this.handleDateChangeStart.bind(this);
    this.handleDateChangeEnd = this.handleDateChangeEnd.bind(this);
    this.handleTimeChangeStart = this.handleTimeChangeStart.bind(this);
    this.handleTimeChangeEnd = this.handleTimeChangeEnd.bind(this);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDateChange({ startDate = this.state.startDateTime, endDate = this.state.endDateTime, event }) {
    let startDateForRange = startDate;
    let endDateForRange = endDate;

    // It seems unnatural to swap the start and stop date when start and after stop. Perhaps, we should just display an error instead.
    // if (moment(startDateForRange).isAfter(moment(endDateForRange))) {
    //   [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
    // }

    this.setState({ startDateTime: startDateForRange, endDateTime: endDateForRange });

    if (this.props.onDateChange) {
      this.props.onDateChange(startDateForRange, endDateForRange, event);
    }
  }

  handleTimeChange({ startTime = this.state.startDateTime, endTime = this.state.endDateTime, event }) {
    let startTimeForRange = startTime;
    let endTimeForRange = endTime;

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

  handleDateChangeStart(startDate, event) {
    this.handleDateChange({ startDate, event });
  }

  handleDateChangeEnd(endDate, event) {
    this.handleDateChange({ endDate, event });
  }

  handleTimeChangeStart(startTime, event) {
    this.handleTimeChange({ startTime, event });
  }

  handleTimeChangeEnd(endTime, event) {
    this.handleTimeChange({ endTime, event });
  }

  render() {
    return (<div className="terra-DateTimePicker-range">
      <DateTimePicker
        {...this.props}
        value={this.state.startDateTime}
        isStartDateRange
        startDateTime={this.state.startDateTime}
        endDateTime={this.state.endDateTime}
        onDateChange={this.handleDateChangeStart}
        onTimeChange={this.handleTimeChangeStart}
      />
      <DateTimePicker
        {...this.props}
        value={this.state.endDateTime}
        isEndDateRange
        startDateTime={this.state.startDateTime}
        endDateTime={this.state.endDateTime}
        onDateChange={this.handleDateChangeEnd}
        onTimeChange={this.handleTimeChangeEnd}
      />
    </div>);
  }
}

DateTimeRange.propTypes = propTypes;

export default DateTimeRange;
