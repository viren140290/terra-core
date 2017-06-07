import React from 'react';
import Menu from 'terra-menu';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const group = (
  <Menu.ItemGroup key="6">
    <Menu.Item text="Default 61" key="61" />
    <Menu.Item text="Default 62" key="62" />
    <Menu.Item text="Default 63" key="63" />
  </Menu.ItemGroup>
);

const buttonViews = [
  (<Menu.Item text="Default 1" key="1">
    <div> Popup Content For Default 1 </div>
  </Menu.Item>),
  <Menu.Item text="Default 2" key="2" />,
  <Menu.Item text="Default 3" key="3" />,
  <Menu.Item text="Default 4" key="4" />,
  <Menu.Item text="Default 5" key="5" />,
  group,
  <Menu.Item text="Default 6" key="7" />,
  <Menu.Item text="Default 7" key="8" />,
  <Menu.Item text="Default 8" key="9" />];

const MenuDemo = () => (
  <CollapsibleMenuView>
    {buttonViews}
  </CollapsibleMenuView>
);

export default MenuDemo;
