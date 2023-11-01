import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../store";

// get state from http://127.0.0.1:5000/getVideosDetail
// use createSlice store videoDetailList
export const getTestRequest = createAsyncThunk(
    "test/getTestRequest",
    async () => {
        console.log("response 111 ");
        const response = await fetch("http://127.0.0.1:5000/getVideosDetail");
        console.log("response ", response);
        return response.json();
    },
);

const initialState = {
    initData: {},
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
    },
    extraReducers:
    (builder) => {
        builder.addCase(getTestRequest.fulfilled, (state, action) => {
            state.initData = action.payload;
        });
    },
});

export const { init } = exampleSlice.actions;

export default exampleSlice.reducer;

// selector
export const selectInitData = (state: RootState): any => state.exampleData.initData;
