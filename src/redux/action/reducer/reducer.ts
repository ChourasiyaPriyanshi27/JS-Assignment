import {
  FETCH_ARTICLE_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_SEARCHBAR_REQUEST,
  FETCH_SEARCHBAR_FAILURE,
  FETCH_SEARCHBAR_SUCCESS,
} from "../actionTypes";
const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const articleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload };

    case FETCH_ARTICLE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const searchBarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SEARCHBAR_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_SEARCHBAR_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload };

    case FETCH_SEARCHBAR_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
