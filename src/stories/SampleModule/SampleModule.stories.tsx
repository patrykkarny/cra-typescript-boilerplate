import React from 'react';

import { storiesOf } from '@storybook/react';

import { SampleModule } from 'components/SampleModule/SampleModule';

import { withGlobalStyles } from '../utils/withGlobalStyles';

storiesOf('SampleModule', module).add(
  'example',
  withGlobalStyles(() => (
    <>
      <SampleModule />
    </>
  ))
);
