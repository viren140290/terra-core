import React from 'react';
import ModalDialogExample from './ModalDialogExample';
import ModalDialogHeader from '../../src/ModalDialogHeader';
import ModalDialogContentHeader from '../../src/ModalDialogContentHeader';
import ModalDialogContent from '../../src/ModalDialogContent';
import ModalDialogFooter from '../../src/ModalDialogFooter';
import ModalDialog from '../../src/ModalDialog';

it('should shallow a modal dialog', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount a modal dialog', () => {
  const modal = mount(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});

it('should render a modal dialog', () => {
  const modal = render(<ModalDialogExample />);
  expect(modal).toMatchSnapshot();
});

it('should have a header', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialogHeader).exists()).toEqual(true);
});

it('should have a content header', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialogContentHeader).exists()).toEqual(true);
});

it('should have content', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialogContent).exists()).toEqual(true);
});

it('should have a footer', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialogFooter).exists()).toEqual(true);
});

it('should have a ariaLabel prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('ariaLabel')).toEqual("Modal Dialog Example");
});

it('should have a classNameModal prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('classNameModal')).toEqual(null);
});

it('should have a classNameOverlay prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('classNameOverlay')).toEqual(null);
});

it('should have a closeOnEsc prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('closeOnEsc')).toEqual(true);
});

it('should have a closeOnOutsideClick prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('closeOnOutsideClick')).toEqual(true);
});

it('should have an isFullscreen prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('isFullscreen')).toEqual(false);
});

it('should have an isOpen prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('isOpen')).toEqual(true);
});

it('should have a role prop', () => {
  const modal = shallow(<ModalDialogExample />);
  expect(modal.find(ModalDialog).prop('role')).toEqual('document');
});

