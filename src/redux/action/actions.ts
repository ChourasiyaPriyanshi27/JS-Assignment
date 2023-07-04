import {
  FETCH_ARTICLE_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_SEARCHBAR_FAILURE,
  FETCH_SEARCHBAR_REQUEST,
  FETCH_SEARCHBAR_SUCCESS,
} from "./actionTypes";

const fetchArticles = () => (dispatch: any) => {
  dispatch({ type: FETCH_ARTICLE_REQUEST });
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=69f8347f69d8489dbad11bbfdc706156",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer fd5cfcb491ef4fb5a9a335fa8674627e",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_ARTICLE_FAILURE, payload: error.message });
    });
};
export default fetchArticles;
export const searchBarArticles = () => (dispatch: any) => {
  dispatch({ type: FETCH_SEARCHBAR_REQUEST });
  fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=69f8347f69d8489dbad11bbfdc706156",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 69f8347f69d8489dbad11bbfdc706156",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_SEARCHBAR_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_SEARCHBAR_FAILURE, payload: error.message });
    });
};
