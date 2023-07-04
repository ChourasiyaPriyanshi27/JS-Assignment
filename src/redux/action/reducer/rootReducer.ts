import { combineReducers } from "redux";
import { articleReducer, searchBarReducer } from "./reducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  searchBarArticles: searchBarReducer,
});

export default rootReducer;
