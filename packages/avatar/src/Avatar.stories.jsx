import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#1D1D1D' }
      ],
    },
  }
};

const Story = (args) => <Avatar {...args} />;

export const Primary = Story.bind({});