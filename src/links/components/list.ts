import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
} from '@angular/core';
import { ApiLinkItem } from '../types';
import { LinksStore } from '../stores/links';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LinksStore],
  imports: [JsonPipe],
  template: `
    <div class="">
      @if (linksResource.isLoading()) {
        <div class="alert alert-info">Your Data is Loading! Chill out!</div>
      } @else {
        @for (link of sortedList(); track link.id) {
          <div class="card w-96 bg-base-100 card-sm shadow-sm">
            <div class="card-body">
              <h2 class="card-title">{{ link.title }}</h2>
              <p>
                {{ link.description }}
              </p>
              <div class="justify-end card-actions">
                <a [href]="link.link" target="_blank" class="btn btn-primary"
                  >Visit</a
                >
                <p>Link {{ link.link }}</p>
                <p>Added on {{ link.added }}</p>
              </div>
            </div>
          </div>
        } @empty {
          <p>There are no links! Bummer!</p>
        }
      }
    </div>
  `,
  styles: ``,
})
export class List {
  linksResource = httpResource<ApiLinkItem[]>(() => ({
    url: 'https://api.some-fake-server.com/links',
  }));

  store = inject(LinksStore);

  sortedList = computed(() => {
    const links = this.linksResource.value() || [];
    const sortedBy = this.store.sortingBy();

    return [...links].sort((lhs, rhs) => {
      const aDate = new Date(lhs.added);
      const bDate = new Date(rhs.added);
      if (sortedBy === 'NewestFirst') {
        if (aDate < bDate) {
          return 1;
        }
        if (aDate > bDate) {
          return -1;
        }
        return 0;
      } else {
        if (aDate < bDate) {
          return -1;
        }
        if (aDate > bDate) {
          return 1;
        }
        return 0;
      }
    });
  });
}
