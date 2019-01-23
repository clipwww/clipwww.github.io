import { IRouteConfig } from '@/view-models/router.vm';
import lazyloading from '@/router/lazyloading';

const routes: IRouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: lazyloading('Home'),
    meta: {
      label: '首頁',
      isHidden: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: lazyloading('About'),
    meta: {
      label: '關於',
      isHidden: true,
    },
  },

];

export default routes;
