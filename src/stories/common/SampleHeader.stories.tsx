import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { SampleHeader } from 'components/common/SampleHeader/SampleHeader';

import { withGlobalStyles } from '../utils/withGlobalStyles';

storiesOf('SampleHeader', module).add(
  'example',
  withGlobalStyles(() => (
    <SampleHeader>{text('Sample Text', 'Sample Text')}</SampleHeader>
  ))
);
