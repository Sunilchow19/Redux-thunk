import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "../reducer/reducer";
import { thunk } from "redux-thunk";

export let store = createStore(reducer, applyMiddleware(thunk));
