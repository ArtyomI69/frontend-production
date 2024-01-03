import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asd' } })];

export const WithError = Template.bind({});
WithError.decorators = [
  StoreDecorator({ loginForm: { username: '123', password: 'asd', error: 'ERROR' } }),
];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
