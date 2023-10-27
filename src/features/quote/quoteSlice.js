import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadQuote = createAsyncThunk('quote/loadQuote',
    async (arg, thunkAPI) => {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/');
        const json = await response.json();
        console.log(json)
        return json[0];
    }
)

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {
            q: 'To become what you are not, behave as you do not.',
            a: 'T.S. Eliot',
        },
        isLoadingQuote: false,
        failedToLoadQuote: false,
    },
    extraReducers: {
        [loadQuote.pending]: (state,action) => {
            state.isLoadingQuote = true;
            state.failedToLoadQuote = false;
        },
        [loadQuote.fulfilled]: (state,action) => {
            state.quote = action.payload;
            state.isLoadingQuote = false;
            state.failedToLoadQuote = false;
        },
        [loadQuote.rejected]: (state,action) => {
            state.isLoadingQuote = false;
            state.failedToLoadQuote = true;
        },
    }
})

export const selectQuote = (state) => state.quote.quote;
export const isLoadingQuote = (state) => state.quote.isLoadingQuote;
export const failedToLoadQuote = (state) => state.quote.failedToLoadQuote;

export default quoteSlice.reducer;