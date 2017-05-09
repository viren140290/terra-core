import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-collapsible-tab-view/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CollapsibleTabViewSrc from '!raw-loader!terra-collapsible-tab-view/src/CollapsibleTabView';

// Example Files
import CollapsibleTabViewDemo from './CollapsibleTabViewDemo';

const CollapsibleTabViewExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="example">Example</h2>
    <CollapsibleTabViewDemo />
  </div>
);

export default CollapsibleTabViewExamples;
