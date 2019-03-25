/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import Navigation from '../components/navigation';

storiesOf('Navigation', module).add('Basic navigation', () => {
  const router = {
    asPath: '/',
    route: '/',
  };
  return <Navigation router={router} />;
});
