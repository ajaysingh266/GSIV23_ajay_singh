import { combineReducers } from "redux";
import movieSlice from "./homeSlice";

const rootReducer = combineReducers({
  movie: movieSlice,
});

export default rootReducer;
