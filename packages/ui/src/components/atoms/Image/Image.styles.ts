import { cva } from 'class-variance-authority';

export const imageStyles = cva('block max-w-full', {
  variants: {
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
    },
    rounded: {
      none: '',
      md: 'rounded-md',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    fit: 'cover',
    rounded: 'none',
  },
});
