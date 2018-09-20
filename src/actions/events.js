import * as constants from '../constants'

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR
  };
}
export function clearEvent(eventId) {
  return {
    type: constants.EVENT_CLEAR,
    payload: {
      eventId
    }
  }
}
export function filterEvents(filter) {
  return {
    type: constants.EVENTS_FILTER,
    payload: {
      filter
    }
  }
}

export function changeFormField(field, value){
  return {
    type: constants.EVENTS_FORM_DATA,
    payload: {
      field,
      value
    }
  }
}

export function eventAdd(name, place, date) {
  return {
    type: constants.EVENT_ADD,
    payload: {
      name,
      place,
      date
    }
  }
}

export function eventsSort(id) {
  return {
    type: constants.EVENTS_SORT,
    payload: {
      id
    }
  }
}
