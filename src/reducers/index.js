import { combineReducers } from "redux";
import resoursesReducer from "./resourcesReducer";

export default combineReducers({
  resources: resoursesReducer,
});
