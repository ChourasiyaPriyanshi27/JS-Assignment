import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_ARTICLE_SUCCESS } from "../redux/action/actionTypes";

const middleware = [thunk];
const mockStore = configureStore(middleware);

function success() {
  return {
    type: FETCH_ARTICLE_SUCCESS,
  };
}

function fetchData() {
  return ((dispatch:any) => {
    return fetch("").then(() => dispatch(success()));
  });
}
test("https://newsapi.org/v2/top-headlines?country=us&apiKey=69f8347f69d8489dbad11bbfdc706156", () => {
  const store = mockStore({});
  return store.dispatch(fetchData());
  const actions = store.getActions();
  expect(actions[0]).toEqual(success());
});
