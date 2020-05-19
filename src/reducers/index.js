import { combineReducers } from "redux";
import resoursesReducer from "./resourcesReducer";
import newResourceReducer from "./newResourceReducer";
import searchReducer from './searchReducer'

export default combineReducers({
  resources: resoursesReducer,
  newResource: newResourceReducer,
  search: searchReducer
});

// eslint-disable-next-line
const store = {
  resources: {
    list: [],
    loading: true,
    errors: {},
    count: 0
  },
  newResource: {
    form: {
      id: 0,
      posterName: "",
      resourceAuthor: "",
      authorSkillLevel: "",
      cohort: "",
      title: "",
      categories: "",
      summary: "",
      link: "",
      resourceType: "",
      datePublished: "",
      videoLength: "",
      timeToComplete: "",
      rating: "",
      comments: [],
    },
    loading: false,
    errors: {},
  },
  search: {
    list: [],
    query: '',
    loading: false,
    errors: {}
  }
}