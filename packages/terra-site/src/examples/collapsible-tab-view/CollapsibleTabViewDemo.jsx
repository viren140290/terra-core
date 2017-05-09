import React from 'react';
import Button from 'terra-button';
import CollapsibleTabView from 'terra-collapsible-tab-view';

const buttonViews = [
	<CollapsibleTabView.Item text="Default 1" key="1" />, 
	<CollapsibleTabView.Item text="Default 2" key="2" />,
	<CollapsibleTabView.Item text="Default 3" key="3" />, 
	<CollapsibleTabView.Item text="Default 4" key="4" />,
	<CollapsibleTabView.Item text="Default 5" key="5" />, 
	<CollapsibleTabView.Item text="Default 6" key="6" />,
	<CollapsibleTabView.Item text="Default 7" key="7" />, 
	<CollapsibleTabView.Item text="Default 8" key="8" />, 
	<CollapsibleTabView.Item text="Default 9" key="9" />];

const CollapsibleTabViewDemo = () => (
  <CollapsibleTabView>
  	{buttonViews}
  </CollapsibleTabView>
);

export default CollapsibleTabViewDemo;
