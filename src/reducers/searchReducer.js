import {CHANGE_QUERY} from '../actions/types'
import resources from "../mock/resources";

const INITIAL_STORE = {
  list: [...resources],
  query: "",
  loading: false,
  errors: {}
}

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...store,
        query: action.payload.query,
        list: action.payload.newList
      }
    default: 
      return store;
  }
}