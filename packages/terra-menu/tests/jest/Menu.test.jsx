import React from 'react';
import Menu from '../../src/Menu';

describe('Menu', () => {
  const defaultRender = <Menu />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Menu').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-Menu', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Menu');
  });
});
