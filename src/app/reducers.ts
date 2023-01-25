import { combineReducers } from "redux";
import counter from "../features/counter/counterReducer";

export default combineReducers({
  counter,
});
