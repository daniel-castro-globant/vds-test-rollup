import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#1D1D1D' }
      ],
    },
  }
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  text: 'Button',
};

export const Secondary = Story.bind({});
Secondary.args = {
  text: 'Button',
  type: 'secondary'
};

export const Tertiary = Story.bind({});
Tertiary.args = {
  text: 'Button',
  type: 'tertiary'
};

export const Quaternary = Story.bind({});
Quaternary.args = {
  text: 'Button',
  type: 'quaternary'
};

export const Disabled = Story.bind({});
Disabled.args = {
  text: 'Button',
  type: 'disabled'
};