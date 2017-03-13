/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DatePickerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/date-picker-tests/default">DatePicker - Default</Link></li>
      <li><Link to="/tests/date-picker-tests/custom-input">DatePicker - Custom Input</Link></li>
      <li><Link to="/tests/date-picker-tests/exclude-dates">DatePicker - Exclude Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/filter-dates">DatePicker - Filter Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/hide-month-year-dropdown">DatePicker - Hide Month/Year Dropdown</Link></li>
      <li><Link to="/tests/date-picker-tests/hide-today-button">DatePicker - Hide Today Button</Link></li>
      <li><Link to="/tests/date-picker-tests/highlight-dates">DatePicker - Highlight Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/include-dates">DatePicker - Include Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/min-max">DatePicker - Min Max</Link></li>
      <li><Link to="/tests/date-picker-tests/mulitple-months">DatePicker - Multiple Months</Link></li>
      <li><Link to="/tests/date-picker-tests/on-change">DatePicker - On Change</Link></li>
      <li><Link to="/tests/date-picker-tests/open-to-dates">DatePicker - Open to Date</Link></li>
      <li><Link to="/tests/date-picker-tests/portal">DatePicker - Portal</Link></li>
      <li><Link to="/tests/date-picker-tests/start-dates">DatePicker - Start Date</Link></li>
      <li><Link to="/tests/date-picker-tests/today-button">DatePicker - Today Button</Link></li>
      <li><Link to="/tests/date-picker-tests/date-range">DatePicker - Date Range</Link></li>
    </ul>
  </div>
);

export default DatePickerTests;