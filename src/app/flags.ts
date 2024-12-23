import { unstable_flag as flag } from '@vercel/flags/next';

export const example_flag = flag({
  key: 'example_flag',
  decide: () => false,
});
