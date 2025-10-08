import { Component, ChangeDetectionStrategy } from '@angular/core';
import { List } from './components/list';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [List],
  template: `
    <div class="flex flex-row gap 4">
      <a class="link" routerLink="list">List</a>
      <a class="link" routerLink="prefs">Prefs</a>
    </div>
    <p>Links Will Go Here</p>
    <app-links-list />
  `,
  styles: ``,
})
export class Links {}
