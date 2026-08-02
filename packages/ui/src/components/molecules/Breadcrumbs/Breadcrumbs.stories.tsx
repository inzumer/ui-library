import type { Meta, StoryObj } from '@storybook/react';
import readme from './README.md?raw';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme.replace(/^#[^\n]*\n+/, ''),
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
    ],
    current: 'UI Library',
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
    ],
    current: 'UI Library',
    separator: '›',
  },
};
