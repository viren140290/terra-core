import React from 'react';
import ModalDialogContent from '../../src/ModalDialogContent';

const modalDialogContent = <ModalDialogContent>This is content</ModalDialogContent>;

it('should shallow an open modal', () => {
  const modal = shallow(modalDialogContent);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(modalDialogContent);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(modalDialogContent);
  expect(modal).toMatchSnapshot();
});

it('should have class terra-ModalDialog-content', () => {
  const modal = shallow(modalDialogContent);
  expect(modal.prop('className')).toEqual('terra-ModalDialog-content');
});
