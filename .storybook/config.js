import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { withThemesProvider } from 'storybook-addon-emotion-theme';

import { THEME } from 'consts';

addDecorator(withThemesProvider([THEME.DEFAULT]));
addDecorator(withKnobs);

const req = require.context('../src/stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
