import { createSelector } from 'reselect'
import { get } from 'lodash';

const events = state => get(state, 'exchange.events')
const account = state => get(state, 'provider.account')

// ------------------------------------------------------------------------------
// MY EVENTS-- Alert

export const myEventsSelector = createSelector(
  account,
  events,
  (account, events) => {
    events = events.filter((e) => e.args.user === account)
    console.log(events)
    return events
  }
)
