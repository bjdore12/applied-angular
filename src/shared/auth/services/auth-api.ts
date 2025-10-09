import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class AuthApi {
  // # makes it private, could also use 'private' too, # is JS while 'private' is TS
  #client = inject(HttpClient);

  getUser() {
    // fake classroom stuff.
    return this.#client.get<{ userId: string }>('/api/auth/user');
  }
}
