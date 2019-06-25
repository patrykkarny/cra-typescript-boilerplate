import { ComponentType, LazyExoticComponent } from 'react';

export type RouteType = {
  component: ComponentType<any> | LazyExoticComponent<any>;
  path: string;
  description: string;
  exact?: boolean;
  title: string;
  routes?: RouteType[];
  pathsToPrefetch?: Array<() => Promise<any>>;
};
