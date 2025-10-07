import { Routes } from '@angular/router';
import { Demos } from './demos';
import { Signals } from './pages/signals';
import { Signals2 } from './pages/signals2';
import { Page1 } from './pages/service-stuff/page1';
import { Page2 } from './pages/service-stuff/page2';
import { DemoService } from './pages/service-stuff/demo-service';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: Demos,
    providers: [DemoService],
    children: [
      {
        path: 'signals',
        component: Signals,
      },
      {
        path: 'signals2',
        component: Signals2,
      },
      {
        path: 'services',
        component: Page1,
      },
      { path: 'services2', component: Page2 },
    ],
  },
];
