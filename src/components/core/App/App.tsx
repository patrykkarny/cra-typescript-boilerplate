import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { THEME } from 'consts';

import { GlobalStyles } from 'components/core/GlobalStyles/GlobalStyles';
import { Routing } from 'components/core/Routing/Routing';

const App: React.FC = () => (
  <ThemeProvider theme={THEME.DEFAULT}>
    <GlobalStyles />
    <Routing />
  </ThemeProvider>
);

export default App;
