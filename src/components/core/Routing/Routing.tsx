import React, { Suspense } from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';

import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import { ROUTER_CONFIG } from './config';

export const Routing = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <Switch>
        {ROUTER_CONFIG.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  </Suspense>
);
