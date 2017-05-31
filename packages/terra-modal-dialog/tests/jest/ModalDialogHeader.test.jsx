import React from 'react';
import ModalDialogHeader from '../../src/ModalDialogHeader';
import ModalDialogHeaderDismiss from '../../src/ModalDialogHeaderDismiss';

describe('ModalDialogHeader with dismiss button', () => {
  const modalDialogHeader = <ModalDialogHeader onClick={() => console.log('clicked')}>This is content</ModalDialogHeader>;

  it('should shallow a modal dialog header', () => {
    const modal = shallow(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should mount a modal dialog header', () => {
    const modal = mount(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should render a modal dialog header', () => {
    const modal = render(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should have class terra-ModalDialog-header', () => {
    const modal = shallow(modalDialogHeader);
    expect(modal.prop('className')).toEqual('terra-ModalDialog-header');
  });

  it('should have a dismiss button', () => {
    const modal = shallow(modalDialogHeader);
    expect(modal.find(ModalDialogHeaderDismiss).exists()).toEqual(true);
  });
});

describe('ModalDialogHeader without dismiss button', () => {
  const modalDialogHeader = <ModalDialogHeader>This is content</ModalDialogHeader>;

  it('should shallow a modal dialog header', () => {
    const modal = shallow(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should mount a modal dialog header', () => {
    const modal = mount(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should render a modal dialog header', () => {
    const modal = render(modalDialogHeader);
    expect(modal).toMatchSnapshot();
  });

  it('should have class terra-ModalDialog-header', () => {
    const wrapper = shallow(modalDialogHeader);
    expect(wrapper.prop('className')).toEqual('terra-ModalDialog-header');
  });

  it('should not have a dismiss button', () => {
    const modal = shallow(modalDialogHeader);
    expect(modal.find(ModalDialogHeaderDismiss).exists()).toEqual(false);
  });
});
