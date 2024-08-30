import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { DataItem, DataState } from "./index.type";

// get state from http://127.0.0.1:5000/getVideosDetail
export const initialStateRequest = createAsyncThunk(
    "wordLearn/initialState",
    async () => {
        const response = await fetch("http://127.0.0.1:5000/getVideosDetail");
        return response.json();
    },
);

// Fetch state based on the search word
export const fetchItems = createAsyncThunk(
    "wordLearn/fetchItems",
    async (word: string) => {
        const response = await fetch(`https://woasishenappservice-eacsdgd9gvcybxhe.eastus-01.azurewebsites.net/search?word=${word}`);
        if (!response.ok) {
            throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        console.log("data: ", data);
        return data; // assuming the data has an 'items' field containing the array
    },
);

const itemsLo:DataItem[] = [
    {
        description: {
            english: " Instinct as a natural ability to understand or judge people or situations:",
            chinese: " 本能作为一种理解或判断人或情况的自然能力",
            japanese: " 本能は人や状況を理解したり判断したりする自然な能力として",
        },
        fragments: [
            {
                startTime: "00:30:35,560",
                endTime: "00:30:47,270",
                sentence: "I have great instincts about people, I always have, Susie, you know that.",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S01E19.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=KX%2F9wUe0B7pYFOtu6%2Fchne%2BXVQKNTi0escc4bvyyu24%3D",
            },
            {
                startTime: "00:18:01,930",
                endTime: "00:18:11,980",
                sentence: "His visual instincts are off the chart.",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S01E22.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=ZG8qMxliO3cMelsWjkd5hvhku%2FZzsAv4co43NEaIRLY%3D",
            },
            {
                startTime: "00:23:36,041",
                endTime: "00:23:41,505",
                sentence: "With you, I had to rely on my instincts.",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S02E04.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=%2FV40oAJAFeKgcQzY%2F%2BZSXtfQ1M9VdDNQ2o6F6osgJpw%3D",
            },
            {
                startTime: "00:25:26,390",
                endTime: "00:25:40,220",
                sentence: "I guess my instincts about Sam were right, wouldn't you say?",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S06E21.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=F%2FXHRbJt0zur1tWo076BMCrAsskiVWDbAV%2Bs%2Bg%2BjAXw%3D",
            },
        ],
    },
    {
        description: {
            english: " Instinct as a natural, inherent drive or impulse:",
            chinese: " 本能作为一种自然的、固有的驱动力或冲动",
            japanese: " 本能は自然で固有の衝動や欲求として",
        },
        fragments: [
            {
                startTime: "00:14:25,890",
                endTime: "00:14:37,440",
                sentence: "I don't know.You know,survival instinct?",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S02E12.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=DztDeIdX3JdOmBs87GFNr8oWMV2KSw%2BVF6%2F%2F%2BUtZaaI%3D",
            },
            {
                startTime: "00:32:03,290",
                endTime: "00:32:16,930",
                sentence: "\"gee,you know,maybe I shouldjust ignore my better instincts,",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S02E13.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=3tSbVdWEld6rT%2FIg7BDYzIKdgAYwVDQxH6ERsmGJGlQ%3D",
            },
            {
                startTime: "00:40:08,720",
                endTime: "00:40:23,640",
                sentence: "I've always thoughtthe maternal instinct",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S02E13.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=3tSbVdWEld6rT%2FIg7BDYzIKdgAYwVDQxH6ERsmGJGlQ%3D",
            },
            {
                startTime: "00:24:07,450",
                endTime: "00:24:21,160",
                sentence: "That the maternal instinct is so strong,",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S04E05.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=yOwq5hOpc5OMjKwQx68Ck73tPHpAU1rSwtQVA6qh5wY%3D",
            },
            {
                startTime: "00:39:04,600",
                endTime: "00:39:09,900",
                sentence: "My first instinct",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S05E14.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=OTaOAIvaBSjbDgdXCbHEBxDnLFDBxdoB7kyhZ7WzPEE%3D",
            },
            {
                startTime: "00:10:31,090",
                endTime: "00:10:31,090",
                sentence: "Funny. That was exactly my first instinct,too.",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S06E19.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=9bSxW6ZIJcXEX8XPeK%2BQ6EugYyanUZjQQwbqmgTWF78%3D",
            },
        ],
    },
    {
        description: {
            english: " Instinct as a natural maternal or protective feeling:",
            chinese: " 本能作为一种自然的母性或保护感觉",
            japanese: " 本能は自然な母性や保護感情として",
        },
        fragments: [
            {
                startTime: "00:40:08,720",
                endTime: "00:40:23,640",
                sentence: "I've always thoughtthe maternal instinct",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S02E13.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=3tSbVdWEld6rT%2FIg7BDYzIKdgAYwVDQxH6ERsmGJGlQ%3D",
            },
            {
                startTime: "00:24:07,450",
                endTime: "00:24:21,160",
                sentence: "That the maternal instinct is so strong,",
                videoUri: "https://woasishensa.blob.core.windows.net/desperate-housewives-mp4/S04E05.mp4?sv=2024-08-04&se=2024-08-30T15%3A23%3A34Z&sr=b&sp=r&sig=yOwq5hOpc5OMjKwQx68Ck73tPHpAU1rSwtQVA6qh5wY%3D",
            },
        ],
    },
];
const initialState:DataState = {
    items: [],
};

// store initData
// use createSlice Modify initData
const wordLearnSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        clearItems: (state) => {
            state.items = [];
        },
    },
    extraReducers:
    (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
            // Optional: Set loading state
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                console.log("action.payload: ", action.payload);
                if (action.payload !== undefined) {
                    state.items = action.payload; // Update the items with the fetched data
                } else {
                    state.items = [];
                }
            })
            .addCase(fetchItems.rejected, (state, action) => {
            // Optional: Handle error state
                console.error("Failed to fetch items:", action.error);
            });
    },
});

// eslint-disable-next-line no-empty-pattern
export const { clearItems } = wordLearnSlice.actions;

// selector
export const selectItems = (state: RootState) => state.wordLearn.items;
export default wordLearnSlice.reducer;
// Path: src\componens\video\index.tsx
