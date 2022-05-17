import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Head } from '.';

export default {
  title: 'Components/Head/Head',
  component: Head,
} as ComponentMeta<typeof Head>;

const Template: ComponentStory<typeof Head> = () => <Head />;

export const Default = Template.bind({});
