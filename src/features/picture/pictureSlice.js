import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const accessKey = '';
const heroku = 'https://cors-anywhere.herokuapp.com/'
const unsplash = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&orientation=landscape&topics=bo8jQKTaE0Y`;
const url = heroku + unsplash;

export const loadPicture = createAsyncThunk('picture/loadPicture',
    async (arg, thunkAPI) => {
        const response = await fetch(`${url}`);
        const json = await response.json();
        console.log(json);
        return {
            pictureUrl: json.urls.full,
            name: json.user.name,
            username: json.user.username,
        };
    }
)

const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1571430926384-d0d4e5303e9d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzY2MjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODIwNTM0NTA&ixlib=rb-4.0.3&q=85")',
        backgroundSize: 'cover',
        name: 'Pascal Meier',
        username: 'zhpix',
        height: '100vh',
        isLoadingPicture: false,
        failedToLoadPicture: false,
    },
    extraReducers: {
        [loadPicture.pending]: (state,action) => {
            state.isLoadingPicture = true;
            state.failedToLoadPicture = false;
        },
        [loadPicture.fulfilled]: (state,action) => {
            state.backgroundImage = `url("${action.payload.pictureUrl}")`;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.isLoadingPicture = false;
            state.failedToLoadPicture = false;
        },
        [loadPicture.rejected]: (state,action) => {
            state.isLoadingPicture = false;
            state.failedToLoadPicture = true;
        },
    }
})

export const selectBackground = (state) => ({
    backgroundImage: state.picture.backgroundImage,
    backgroundSize: state.picture.backgroundSize,
    height: state.picture.height,
    width: state.picture.width,
}); // should be an obj w background img and size
export const selectUser = (state) => ({
    name: state.picture.name,
    username: state.picture.username,
});
export default pictureSlice.reducer;