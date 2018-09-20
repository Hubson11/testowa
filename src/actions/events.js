import * as constants from '../constants'
import fetch from 'isomorphic-fetch'

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

export function getEventsStart() {
  return {
    type: constants.EVENTS_GET_START
  }
}

export function getEventsSuccess(data) {
  return {
    type: constants.EVENTS_GET_SUCCESS,
    payload: {
      data
    }
  }
}

export function getEventsError(error) {
  return {
    type: constants.EVENTS_GET_ERROR,
    payload: {
      error
    }
  }
}

export function getEvents() {
  return (dispatch) => {
    dispatch(getEventsStart());

    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => dispatch(getEventsSuccess(data)))
      .catch(error => dispatch(getEventsError(error)))
  }
}
