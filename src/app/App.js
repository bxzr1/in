import React from 'react';
import './App.css';
import TodoList from '../features/todos/TodoList';
import Weather from '../features/weather/Weather';
import Quote from '../features/quote/Quote';
import { useSelector } from 'react-redux';
import { selectBackground } from '../features/picture/pictureSlice';
import Picture from '../features/picture/Picture';
import Clock from '../components/Clock/Clock';


function App() {
    const background = useSelector(selectBackground);

    return (
        <div className='App' style={background}>
            <div className='App-header'>
                <Weather />
            </div>
            <div className='App-main'>
                <Clock />
            </div>
            <TodoList />
            <div className='App-lower'>
                <Quote />
            </div>
            <Picture />
        </div>
    )
}

export default App;