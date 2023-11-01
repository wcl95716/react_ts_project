import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// get state from http://127.0.0.1:5000/getVideosDetail
// use createSlice store videoDetailList
export const getTestRequest = createAsyncThunk(
    "test/getTestRequest",
    async () => {
        const response = await fetch("http://127.0.0.1:5000/getVideosDetail");
        return response.json();
    },
);

const initialState = {
    initData: {},
    testData: "123",
};

// store initData
// use createSlice Modify initData
export const exampleSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        init: (state, action) => {
            state.initData = action.payload;
        },
        changeData: (state, action) => {
            state.testData = "456";
        },
    },
    extraReducers:
    (builder) => {
        builder.addCase(getTestRequest.fulfilled, (state, action) => {
            state.initData = action.payload;
        });
    },
});

export const { init, changeData } = exampleSlice.actions;

export default exampleSlice.reducer;

// selector
export const selectInitData = (state: RootState) => state.exampleData.initData;
export const selectTestData = (state: RootState) => state.exampleData.testData;
// Path: src\componens\video\index.tsx
