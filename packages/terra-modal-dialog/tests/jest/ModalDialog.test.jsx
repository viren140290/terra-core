import React from 'react';
import ModalDialogExample from './ModalDialogExample';

it('should shallow an open modal', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});
