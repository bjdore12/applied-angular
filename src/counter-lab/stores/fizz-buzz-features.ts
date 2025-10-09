import { Signal } from '@angular/core';
import {
  signalStoreFeature,
  type,
  withComputed,
  withState,
} from '@ngrx/signals';

export function withFizzBuzz() {
  return signalStoreFeature(
    {
      state: type<{ current: number }>(),
    },
    withState({ current: 0 }),
    withComputed((store) => ({
      fizzBuzz: () => fizzBuzzComputed(store.current),
    })),
  );
}
function fizzBuzzComputed(current: Signal<number>): any {
  throw new Error('Function not implemented.');
}
