import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadWeather = createAsyncThunk('weather/loadWeather',
    async (arg, thunkAPI) => {
        const cityName = 'Seattle';
        const stateCode = 53;
        const apiKey = '';
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`);
        const json = await response.json();
        const { lat, lon } = json[0];
        const weatherResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        const weatherJson = await weatherResponse.json();
        return {
            city: cityName,
            state: 'WA',
            temp: weatherJson.main.temp,
            description: weatherJson.weather[0].description,
            maxTemp: weatherJson.main.temp_max,
            minTemp: weatherJson.main.temp_min,
            sunrise: weatherJson.sys.sunrise,
            sunset: weatherJson.sys.sunset,
            icon: weatherJson.weather[0].icon,
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temp: 300,
        description: 'slightly overcast',
        maxTemp: 0,
        minTemp: 0,
        sunrise: 0,
        sunset: 0,
        city: 'Seattle',
        state: 'WA',
        icon: '',
        isLoadingWeather: false,
        failedToLoadWeather: false,
    },
    extraReducers: {
        [loadWeather.pending]: (state,action) => {
            state.isLoadingWeather = true;
            state.failedToLoadWeather = false;
        },
        [loadWeather.fulfilled]: (state,action) => {
            state.temp = action.payload.temp;
            state.description = action.payload.description;
            state.maxTemp = action.payload.maxTemp;
            state.minTemp = action.payload.minTemp;
            state.sunrise = action.payload.sunrise;
            state.sunset = action.payload.sunset;
            state.city = action.payload.city;
            state.state = action.payload.state;
            state.icon = action.payload.icon;
            state.isLoadingWeather = false;
            state.failedToLoadWeather = false;
        },
        [loadWeather.rejected]: (state,action) => {
            state.isLoadingWeather = false;
            state.failedToLoadWeather = true;
        },
    }
})

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer;