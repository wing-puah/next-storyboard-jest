/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import Box from '../components/styles/box';

storiesOf('Box', module)
  .add('Basic box', () => <Box />);
