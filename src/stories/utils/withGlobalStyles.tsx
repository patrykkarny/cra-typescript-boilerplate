import React from 'react';
import { GlobalStyles } from 'components/core/GlobalStyles/GlobalStyles';

export const withGlobalStyles = (cb: any) => () => (
  <>
    <GlobalStyles />
    {cb()}
  </>
);
