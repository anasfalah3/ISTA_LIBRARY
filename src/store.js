import { legacy_createStore } from "redux";
import booksReducer from "./reducer";
const store = legacy_createStore(booksReducer);
export default store;
