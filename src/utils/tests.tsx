import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import { THEME } from 'consts';

const render = (
  ui: React.ReactNode,
  options?: { container: HTMLElement; baseElement?: HTMLElement }
) => ({
  ...rtlRender(
    <ThemeProvider theme={THEME.DEFAULT}>{ui}</ThemeProvider>,
    options
  ),
});

const renderWithRouter = (
  ui: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...options
  }: any = {}
) => ({
  ...render(
    <ThemeProvider theme={THEME.DEFAULT}>
      <Router history={history}>{ui}</Router>
    </ThemeProvider>,
    options
  ),
  history,
});

const TestHook = ({ callback }: { callback: (params?: any) => any }) => {
  callback();
  return null;
};

const useTestHook = (callback: (params?: any) => any) => {
  render(<TestHook callback={callback} />);
};

export * from '@testing-library/react';
export { render, renderWithRouter, TestHook, useTestHook };
