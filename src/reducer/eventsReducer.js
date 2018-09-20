import events from '../data/events.json'
import * as actions from '../constants'
const initialState = {
  events: [],
  isLoading: false,
  isError: false,
  filter: '',
  newName: '',
  newPlace: '',
  newDate: '',
};

export function eventsReducer(state = initialState, action){
  switch (action.type) {
    case actions.EVENTS_CLEAR:
      return {...state, events: []};
    case actions.EVENT_CLEAR:
      const id = action.payload.eventId
      const filteredArray = state.events.filter(item=>item.id !== id)
      return {...state, events: filteredArray}
    case actions.EVENTS_FILTER:
      return {...state, filter: action.payload.filter}
    case actions.EVENTS_FORM_DATA:
      const {field, value} = action.payload;
      return { ...state, [field]: value, [field + 'Valid']: value.length > 0 } ;
    case actions.EVENT_ADD:
      const stateCopy = { ...state };
      const { name, place, date } = action.payload;
      const maxId = Math.max(...events.map(item => item.id));
      stateCopy.events.push({
        id: maxId + 1,
        name: name,
        place: place,
        date: date,
      });
      return {
        ...state,
        events: stateCopy.events,
        newName: '',
        newPlace: '',
        newDate: '',
       };
    case actions.EVENTS_SORT:
      const stateCopy2 = { ...state };
      const sortItem = action.payload.id
      if(stateCopy2.events.length > 1){
        if(sortItem === 'name'){
          if(stateCopy2.events[0].name > stateCopy2.events[1].name){
            stateCopy2.events.sort((a,b) => {
                return a.name > b.name;
            });
            return {...state, state: stateCopy2};


          }else {
            stateCopy2.events.sort((a,b) => {
                return a.name < b.name;
            });
            return {...state, state: stateCopy2};


          }
        } else if(sortItem === 'date') {
          if(Number(stateCopy2.events[0].date) > Number(stateCopy2.events[1].date)){
            stateCopy2.events.sort((a,b) => {
                return Number(a.date) > Number(b.date);
            });
            return {...state, state: stateCopy2};


          }else {
            stateCopy2.events.sort((a,b) => {
                return Number(a.date) < Number(b.date);
            });
            return {...state, state: stateCopy2};


          }
        } else if(sortItem === 'place') {
          if(Number(stateCopy2.events[0].place) > Number(stateCopy2.events[1].place)){
            stateCopy2.events.sort((a,b) => {
              return Number(a.place) > Number(b.place);
            });
            return {...state, state: stateCopy2};

          } else {
            stateCopy2.events.sort((a,b) => {
              return Number(a.place) < Number(b.place);
            });
            return {...state, state: stateCopy2};


          }
        }
      }
    case actions.EVENTS_GET_START:
      return { ...state, isLoading: true }
    case actions.EVENTS_GET_SUCCESS:
      return { ...state, isLoading: false, events: action.payload.data }
    case actions.EVENTS_GET_ERROR:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
}
