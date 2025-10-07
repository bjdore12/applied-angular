import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard';
import { Support } from './pages/support';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'support',
    component: Support,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('../demos/demos.routes').then((r) => r.DEMO_ROUTES),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('../links/link.route').then((l) => l.LINKS_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
