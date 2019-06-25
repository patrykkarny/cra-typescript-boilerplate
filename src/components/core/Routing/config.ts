import { lazy } from 'react';

import { RouteType } from 'types';

export const ROUTER_PATHS = {
  HOME: '/',
};

const SampleModule = lazy(() => import('components/SampleModule/SampleModule'));

export const ROUTER_CONFIG: RouteType[] = [
  {
    component: SampleModule,
    description: 'Sample module description',
    exact: true,
    path: ROUTER_PATHS.HOME,
    title: 'Sample module title',
  },
];
