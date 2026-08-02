import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'INZ.UI',
  brandImage: 'favicon-32x32.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
