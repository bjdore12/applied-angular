import { type } from '@ngrx/signals';
import { eventGroup } from '@ngrx/signals/events';

// "Inciting events"
// loginRequested
// logoutRequested

export const authEvents = eventGroup({
  source: 'Authentication Events',
  events: {
    loginRequested: type<void>(),
    logoutRequested: type<void>(),
  },
});

// when a login is requested - we need to call into an API to get the user information
// if that is successful, then the loginSucceeded
// if that is unsuccessful (like 401) then loginFailed

export const authEffectEvents = eventGroup({
  source: 'Authentication Effect Events',
  events: {
    loginSucceeded: type<{ userid: string }>(),
    loginFailed: type<{ errorMessage: string }>(),
    logoutSucceded: type<void>(),
  },
});
