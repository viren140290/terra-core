import React from 'react';
import ModalDialogHeaderDismiss from '../../src/ModalDialogHeaderDismiss';

const modalDialogHeaderDismiss = <ModalDialogHeaderDismiss>This is content</ModalDialogHeaderDismiss>;

it('should shallow an open modal', () => {
  const modal = shallow(modalDialogHeaderDismiss);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(modalDialogHeaderDismiss);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(modalDialogHeaderDismiss);
  expect(modal).toMatchSnapshot();
});

it('should have class terra-ModalDialog-header-dismiss', () => {
  const modal = shallow(modalDialogHeaderDismiss);
  expect(modal.prop('className')).toEqual('terra-ModalDialog-header-dismiss');
});
