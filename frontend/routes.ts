import { Route } from '@vaadin/router';
import './views/about/about-view';
import './views/main-layout';

export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'about-view',
    title: '',
  },
  {
    path: 'about',
    component: 'about-view',
    title: 'About',
  },
  {
    path: 'routeme-view',
    component: 'route-me-view',
    title: 'Route Me - View',
    action: async () => {
      await import('./views/routeme/route-me-view');
    },
    children: [
      {
        path: '',
        component: 'stack-view',
        title: 'Stack',
        action: async () => {
          await import('./views/subviews/stack-view');
        }
      }
    ] as ViewRoute[]
  },
  {
    path: 'routeme-layout',
    component: 'route-me-layout',
    title: 'Route Me - Layout',
    action: async () => {
      await import('./views/routeme/route-me-layout');
    },
    children: [
      {
        path: '',
        component: 'stack-view',
        title: 'Stack',
        action: async () => {
          await import('./views/subviews/stack-view');
        }
      }
    ] as ViewRoute[]
  },

];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
