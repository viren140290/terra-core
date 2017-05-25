/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import DateTimePicker from 'terra-date-time-picker/src/DateTimePicker';
import DateTimeRange from 'terra-date-time-picker/src/DateTimeRange';
import ReadMe from 'terra-date-time-picker/docs/README.md';
import { version } from 'terra-date-time-picker/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DateTimePickerSrc from '!raw-loader!terra-date-time-picker/src/DateTimePicker';

// Example Files

const DateTimePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DateTimePickerSrc} />
    <h2 id="Default Date Time">Default Date Time</h2>
    <DateTimePicker />
    <h2 id="Date Time Range">Date Time Range</h2>
    <DateTimeRange endDateTime={'2017-02-22 22:22'} startDateTime={'2017-01-11 11:11'} />
  </div>
);

export default DateTimePickerExamples;
