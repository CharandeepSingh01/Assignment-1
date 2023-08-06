import React from 'react';
import { action } from '@storybook/addon-actions';
import Search from '../component/search/Search';


export default {
  title: 'Components/Search',
  component: Search
  
};

export const Default = () => {
 
  const onChange = (event) => {
    action('Input changed')(event.target.value);
  };

  return <Search  onChange={onChange} />;
};
