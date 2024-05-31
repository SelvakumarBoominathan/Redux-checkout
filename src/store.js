// import { configureStore } from "@reduxjs/toolkit";

import { createStore } from "redux";

import costReducer from "./reducer";

const store = createStore(costReducer);

export default store;
