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
   * A callback function to execute when a valid date or time is selected or entered.
   */
  onChange: PropTypes.func,
};

class DateTimeRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'MM/DD/YYYY', // TODO: Get the format from i18n
      startDateTime: props.startDateTime,
      endDateTime: props.endDateTime,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChange({ startDate = this.state.startDateTime, endDate = this.state.endDateTime }) {
    debugger;
    let startDateForRange = startDate;
    let endDateForRange = endDate;

    if (moment(startDateForRange, this.state.format).isAfter(moment(endDateForRange, this.state.format))) {
      [startDateForRange, endDateForRange] = [endDateForRange, startDateForRange];
    }

    this.setState({ startDateTime: startDateForRange, endDateTime: endDateForRange });

    if (this.props.onChange) {
      this.props.onChange(startDateForRange, endDateForRange);
    }
  }

  handleChangeStart(startDate) {
    this.handleChange({ startDate });
  }

  handleChangeEnd(endDate) {
    this.handleChange({ endDate });
  }

  render() {
    return (<div className="terra-DateTimePicker-range">
      <DateTimePicker
        {...this.props}
        value={this.state.startDateTime}
        isStartDateRange
        startDateTime={this.state.startDateTime}
        endDateTime={this.state.endDateTime}
        onChange={this.handleChangeStart}
      />
      <p> - </p>
      <DateTimePicker
        {...this.props}
        value={this.state.endDateTime}
        isEndDateRange
        startDateTime={this.state.startDateTime}
        endDateTime={this.state.endDateTime}
        onChange={this.handleChangeEnd}
      />
    </div>);
  }
}

DateTimeRange.propTypes = propTypes;

export default DateTimeRange;
