import moment from 'moment';

class DateTimeUtil {

  static updateDate(date) {

  }

  static updateTime(dateTimeMoment, time) {
    const splitTime = time.split(':');
    dateTimeMoment.set({ hour: splitTime[0], minute: splitTime[0] });

    return dateTimeMoment;
  }

  static evaluateAmbiguousHour() {

  }

  /* Takes a supported ISO8601 string and formats it based on the provided date and time formats.
     :dateTime (String) - The ISO8601 string representation of the datetime to format.
     :dateFormat (String) - The format to format the date.
     :timeFormat (String) - The format to format the time.

     Returns a hash containing the formatted date and time when a valid ISO8601 date time string is passed.
     Returns empty hash when invalid datetime is passed.
    */
  static formatISO8601DateTime(dateTime, dateFormat, timeFormat) {
    if (!dateTime) {
      return {};
    }

    const dateTimeMoment = moment(dateTime);
    const data = {};

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
  static filterInvalidDates(dates, format) {
    const momentDates = [];

    if (dates) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const momentDate = moment(dates[index], format);
        if (momentDate.isValid()) {
          momentDates.push(momentDate);
        }
      }
    }

    return momentDates.length > 0 ? momentDates : dates;
  }
}

export default DateTimeUtil;
