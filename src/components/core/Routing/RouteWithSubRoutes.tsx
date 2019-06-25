import React, { useEffect } from 'react';

import { RouteType } from 'types';
import { Route } from 'react-router-dom';

export const RouteWithSubRoutes = ({
  pathsToPrefetch,
  ...route
}: RouteType) => {
  useEffect(() => {
    if (!pathsToPrefetch) return;

    pathsToPrefetch.forEach(prefetchPath => prefetchPath());
  }, [pathsToPrefetch]);

  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};
