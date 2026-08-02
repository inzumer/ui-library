import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import readme from './README.md?raw';
import { Language } from './Language';

const options = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
  { value: 'it', label: 'IT' },
];

const meta = {
  title: 'Molecules/Language',
  component: Language,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme.replace(/^#[^\n]*\n+/, ''),
      },
    },
  },
} satisfies Meta<typeof Language>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
    value: 'es',
    onChange: () => {},
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <Language {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const esOption = canvas.getByRole('option', { name: 'ES' });
    const enOption = canvas.getByRole('option', { name: 'EN' });

    await expect(esOption).toHaveAttribute('aria-selected', 'true');

    await userEvent.click(enOption);
    await expect(enOption).toHaveAttribute('aria-selected', 'true');
    await expect(esOption).toHaveAttribute('aria-selected', 'false');
  },
};
