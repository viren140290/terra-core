import React from 'react';
import Button from 'terra-button';
import CollapsibleButtonView from 'terra-collapsible-button-view';

const group = 
	<CollapsibleButtonView.Group isSelectable key="6">
		<CollapsibleButtonView.Item text="Default 61" key="61" />
		<CollapsibleButtonView.Item text="Default 62" key="62" />
		<CollapsibleButtonView.Item text="Default 63" key="63" /> 
	</CollapsibleButtonView.Group>
;

const buttonViews = [
	<CollapsibleButtonView.Item text="Default 1" key="1" />, 
	<CollapsibleButtonView.Item text="Default 2" key="2" />,
	<CollapsibleButtonView.Item text="Default 3" key="3" />, 
	<CollapsibleButtonView.Item text="Default 4" key="4" />,
	<CollapsibleButtonView.Item text="Default 5" key="5" />, 
	group,
	<CollapsibleButtonView.Item text="Default 7" key="7" />, 
	<CollapsibleButtonView.Item text="Default 8" key="8" />, 
	<CollapsibleButtonView.Item text="Default 9" key="9" />];

const CollapsibleButtonViewDemo = () => (
  <CollapsibleButtonView>
  	{buttonViews}
  </CollapsibleButtonView>
);

export default CollapsibleButtonViewDemo;
