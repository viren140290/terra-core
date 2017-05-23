import React from 'react';
import Button from 'terra-button';
import Menu from 'terra-menu';

const group = (
  <Menu.Group key="6">
    <Menu.Item display={<Button text="Default 61" />} key="61" />
    <Menu.Item display={<Button text="Default 62" />} key="62" />
    <Menu.Item display={<Button text="Default 63" />} key="63" />
  </Menu.Group>
);

const buttonViews = [
  <Menu.Item display={<Button text="Default 1" />} key="1" />,
  <Menu.Item display={<Button text="Default 2" />} key="2" />,
  <Menu.Item display={<Button text="Default 3" />} key="3" />,
  <Menu.Item display={<Button text="Default 4" />} key="4" />,
  <Menu.Item display={<Button text="Default 5" />} key="5" />,
  group,
  <Menu.Item display={<Button text="Default 6" />} key="7" />,
  <Menu.Item display={<Button text="Default 7" />} key="8" />,
  <Menu.Item display={<Button text="Default 8" />} key="9" />];

const MenuDemo = () => (
  <Menu>
    {buttonViews}
  </Menu>
);

export default MenuDemo;
