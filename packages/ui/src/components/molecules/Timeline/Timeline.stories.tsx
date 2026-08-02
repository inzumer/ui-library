import type { Meta, StoryObj } from '@storybook/react';
import readme from './README.md?raw';
import { Timeline } from './Timeline';

const meta = {
  title: 'Molecules/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme.replace(/^#[^\n]*\n+/, ''),
      },
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: '2023 — Founded',
        description: ['The company was founded with a small team of three.'],
      },
      {
        title: '2024 — Series A',
        description: ['Raised a Series A round.', 'Expanded the team to 20 people.'],
      },
      {
        title: '2025 — Launch',
        description: ['Publicly launched the product.'],
      },
    ],
  },
};
