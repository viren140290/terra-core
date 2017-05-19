import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggler/docs/README.md';
import Controlled from 'terra-toggler/docs/Controlled.md';
import Uncontrolled from 'terra-toggler/docs/Uncontrolled.md';
import { version } from 'terra-toggler/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TogglerSrc from '!raw-loader!terra-toggler/src/Toggler';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TogglerUncontrolledSrc from '!raw-loader!terra-toggler/src/TogglerUncontrolled';

// Controlled
import TogglerDefault from './TogglerDefault';

// Uncontrolled
import TogglerUncontrolledDefault from './TogglerUncontrolledDefault';

const TogglerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Controlled Toggler</h2>
    <PropsTable id="props" src={TogglerSrc} />
    <Markdown id="controlled" src={Controlled} />
    <h3 id="default">Toggler Default</h3>
    <TogglerDefault />
    <hr />
    <h2>Uncontrolled Toggler</h2>
    <PropsTable id="props" src={TogglerUncontrolledSrc} />
    <Markdown id="uncontrolled" src={Uncontrolled} />
    <h3 id="default">Toggler Default</h3>
    <TogglerUncontrolledDefault />
  </div>
);

export default TogglerExamples;
