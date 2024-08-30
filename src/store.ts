// use configureStore to create a store

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import exampleSliceReducer from "./apps/example/index.model";
import wordLearnReducer from "./apps/wordLearn/index.model";

export const store = configureStore({
    reducer: {
        exampleData: exampleSliceReducer,
        wordLearn: wordLearnReducer,
    },
});

// RootState is the type of the root state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
