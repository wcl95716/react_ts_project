// use configureStore to create a store

import { configureStore } from "@reduxjs/toolkit";
import { exampleSlice } from "./apps/example/index.model";

export const store = configureStore({
    reducer: {
        exampleData: exampleSlice.reducer,
    }
});

// RootState is the type of the root state
export type RootState = ReturnType<typeof store.getState>;
