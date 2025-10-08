import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { SortingOptions } from '../types';

type LinksState = {
  sortingBy: SortingOptions;
};

export const LinksStore = signalStore(
  withState<LinksState>({
    sortingBy: 'NewestFirst',
  }),

  withMethods((state) => {
    return {
      changeSortOrder: (sortingBy: SortingOptions) =>
        patchState(state, { sortingBy }),
    };
  }),
);
