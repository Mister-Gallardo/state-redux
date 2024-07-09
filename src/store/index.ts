import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./cuctomerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { countReducer } from "./counter";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers ({
    cash: cashReducer,
    customers: customerReducer,
    counter: countReducer
})

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof rootReducer>;