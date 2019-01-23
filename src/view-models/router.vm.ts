
import { RouteConfig } from 'vue-router';

export interface RouteMeta {
  label?: string;
  isHidden?: boolean;
  noRedirect?: boolean;
}

export interface IRouteConfig extends RouteConfig {
  children?: IRouteConfig[];
  meta: RouteMeta;
}
