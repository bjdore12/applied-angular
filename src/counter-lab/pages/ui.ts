import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FizzBuzz } from './fizzBuzz';
import { CounterStore } from '../stores/counterState';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FizzBuzz],
  template: `
    <div>
      <button
        [disabled]="store.atZero()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.count() }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>
      <app-fizz-buzz [fizzBuzz]="store.fizzBuzz()" />
    </div>
  `,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
}
