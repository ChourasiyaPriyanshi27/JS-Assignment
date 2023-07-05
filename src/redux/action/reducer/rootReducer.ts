import { combineReducers } from "redux";
import { articleReducer, searchBarReducer } from "./reducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  searchArticles: searchBarReducer,
});

export default rootReducer;
