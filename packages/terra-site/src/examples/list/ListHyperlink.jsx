import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';

const planOverviewUrl = 'http://www.google.com';
const myContent = <a href={planOverviewUrl}><span>Plan Overview</span></a>;

const list = () => (
  <SingleSelectList isDivided={true} hasChevrons={false}>
     <SingleSelectList.Item content={myContent} key="125" isSelectable />
     {/*<SingleSelectList.Item content={<p>test</p>} key="qwe" isSelectable />*/}
  </SingleSelectList>
);

export default list;
