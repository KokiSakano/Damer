import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button, { BUTTON_SIZE, BUTTON_TYPE } from './Index';

export default {
  title: 'Components / Atoms / Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: BUTTON_TYPE.PRIMARY,
  label: 'Primary',
  onClick: action('clicked'),
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: BUTTON_TYPE.SECONDARY,
  label: 'Secondary',
  onClick: action('clicked'),
  disabled: false
};

export const Danger = Template.bind({});
Danger.args = {
  type: BUTTON_TYPE.DANGER,
  label: 'Danger',
  onClick: action('clicked'),
  disabled: false
};

export const Warning = Template.bind({});
Warning.args = {
  type: BUTTON_TYPE.WARNING,
  label: 'Warning',
  onClick: action('clicked'),
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: BUTTON_TYPE.PRIMARY,
  label: 'disabled',
  onClick: action('clicked'),
  disabled: true
};

export const LARGE = Template.bind({});
LARGE.args = {
  type: BUTTON_TYPE.PRIMARY,
  label: 'Primary',
  onClick: action('clicked'),
  size: BUTTON_SIZE.LARGE,
  disabled: false
};

export const SMALL = Template.bind({});
SMALL.args = {
  type: BUTTON_TYPE.PRIMARY,
  label: 'Primary',
  onClick: action('clicked'),
  size: BUTTON_SIZE.SMALL,
  disabled: false
};
