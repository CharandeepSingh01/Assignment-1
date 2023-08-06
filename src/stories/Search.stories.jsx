// Search.stories.jsx

import React from 'react';
import { action } from '@storybook/addon-actions';
import Search from '../component/search/Search'; // Assuming 'Search.js' is the file containing the Search component
import {text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Search',
  component: Search
  
};

// Default story
export const Default = () => {
  // Using the 'text' knob to allow dynamic input for the searchText prop
  const searchText = text('Search Text', '');

  // action() function from Storybook addon-actions allows us to log when onChange event occurs
  const onChange = (event) => {
    action('Input changed')(event.target.value);
  };

  return <Search searchText={searchText} onChange={onChange} />;
};

// You can add more stories with different props here, if needed
