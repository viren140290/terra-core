import React from 'react';
import ModalDialogContentHeader from '../../src/ModalDialogContentHeader';

const modalDialogContentHeader = <ModalDialogContentHeader>This is content</ModalDialogContentHeader>;

it('should shallow an open modal', () => {
  const modal = shallow(modalDialogContentHeader);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(modalDialogContentHeader);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(modalDialogContentHeader);
  expect(modal).toMatchSnapshot();
});

it('should have class terra-ModalDialog-contentHeader', () => {
  const modal = shallow(modalDialogContentHeader);
  expect(modal.prop('className')).toEqual('terra-ModalDialog-contentHeader');
});
