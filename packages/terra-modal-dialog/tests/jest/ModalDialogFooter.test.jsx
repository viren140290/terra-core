import React from 'react';
import ModalDialogFooter from '../../src/ModalDialogFooter';

const modalDialogFooter = <ModalDialogFooter>This is content</ModalDialogFooter>;

it('should shallow an open modal', () => {
  const modal = shallow(modalDialogFooter);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(modalDialogFooter);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(modalDialogFooter);
  expect(modal).toMatchSnapshot();
});

it('should have class terra-ModalDialog-footer', () => {
  const modal = shallow(modalDialogFooter);
  expect(modal.prop('className')).toEqual('terra-ModalDialog-footer');
});
