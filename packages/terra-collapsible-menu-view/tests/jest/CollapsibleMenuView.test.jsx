import React from 'react';
import CollapsibleMenuView from '../../src/CollapsibleMenuView';

describe('CollapsibleMenuView', () => {
  const defaultRender = <CollapsibleMenuView />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-CollapsibleMenuView').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-CollapsibleMenuView', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-CollapsibleMenuView');
  });
});
