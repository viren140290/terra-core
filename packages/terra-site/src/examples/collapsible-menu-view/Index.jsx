/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-collapsible-menu-view/docs/README.md';
import { version } from 'terra-collapsible-menu-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CollapsibleMenuViewSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuView';

// Example Files
import BasicCollapsibleMenuView from './BasicCollapsibleMenuView';

const CollapsibleMenuViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CollapsibleMenuViewSrc} />
    <h2>Collapsible Menu View - Basic</h2>
    <BasicCollapsibleMenuView />
  </div>
);

export default CollapsibleMenuViewExamples;
