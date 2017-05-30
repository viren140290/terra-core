import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal-dialog/docs/README.md';
import { version } from 'terra-modal-dialog/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!terra-modal-dialog/src/ModalDialog';

// Example Files
import ModalDialogDefault from './ModalDialogDefault';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    {/* <PropsTable id="props-table" src={ModalSrc} /> */}
    <h2 id="default">Default Modal Dialog</h2>
    <ModalDialogDefault />
  </div>
);

export default ModalExamples;
