import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';
import pictureReducer from '../features/picture/pictureSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quote: quoteReducer,
    weather: weatherReducer,
    picture: pictureReducer,
  },
});
