import type { Meta, StoryObj } from '@storybook/react';
import readme from './README.md?raw';
import { RichText } from './RichText';

const meta = {
  title: 'Atoms/RichText',
  component: RichText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme.replace(/^#[^\n]*\n+/, ''),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 's1', 's2', 's3', 's4', 'p1', 'p2', 'p3', 'p4'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'bold'],
    },
  },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'p2',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Heading: Story = {
  args: {
    variant: 'h2',
    children: 'A section heading',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(
        [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          's1',
          's2',
          's3',
          's4',
          'p1',
          'p2',
          'p3',
          'p4',
        ] as const
      ).map((variant) => (
        <RichText key={variant} variant={variant}>
          {variant} — The quick brown fox
        </RichText>
      ))}
    </div>
  ),
};
