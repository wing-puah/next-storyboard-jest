import React, { Fragment } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
/* eslint-enable import/no-extraneous-dependencies */
import { ButtonBasic } from '../components/styles/button';

storiesOf('Button', module)
  .add('Basic button', () => (
    <Fragment>
      <ButtonBasic>Test 1</ButtonBasic>
      <ButtonBasic background='#B7D1DA'>Test 2</ButtonBasic>
    </Fragment>
  ));
