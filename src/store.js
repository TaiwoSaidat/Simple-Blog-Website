
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import {thunk} from "redux-thunk";
import postsReducers from "./reducers/postReducers";

const mainReducers = combineReducers({
  posts: postsReducers,
});

const store = createStore(mainReducers, applyMiddleware(thunk));

export default store;
