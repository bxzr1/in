import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWeather, selectWeather } from "./weatherSlice";
import './Weather.css';
import '../features.css';

function Weather() {
    const { city, state, temp, description, maxTemp, minTemp, sunrise, sunset, icon } = useSelector(selectWeather);
    const sunriseDate = new Date(sunrise*1000);
    const sunsetDate = new Date(sunset*1000);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWeather(''));
    }, [])

    useEffect(() => {
        const intervalID = setInterval(() => {
            dispatch(loadWeather(''));
        }, 1000*60*60); // 1000 ms * 60 s * 60 m = every hour
        return () => clearInterval(intervalID);
    }, [])
    
    const handleWeather = (e) => {
        e.preventDefault();
        dispatch(loadWeather(''));
    }

    return (
        <div className='Weather'>
            <div className='About'>
                <p className='Location'>{`${city}, ${state}`}</p>
                <p className='Date'>&nbsp;&nbsp;&nbsp;{sunriseDate.toLocaleDateString()}</p>
            </div>
            <div className='Temp-current'>
                <p className='Temp'>{Math.floor(temp)}° F</p>
                <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    className='Icon'
                />
            </div>
            <p className='Description-label'>Today's forecast is...</p>
            <div className='Description-box'>
                <p className='Description'>{description}</p>
            </div>
            <div className='Temp-today'>
                <p className='Box'>
                    <span className='Temp-label'>max<br/></span>
                    <span className='Temp-value'>{Math.floor(maxTemp)}° F</span>
                </p>
                <p className='Box'>
                    <span className='Temp-label'>min<br/></span>
                    <span className='Temp-value'>{Math.floor(minTemp)}° F</span>
                </p>
                <p className='Box'>
                    <span className='Temp-label'>sunrise<br/></span>
                    <span className='Temp-value'>{sunriseDate.toLocaleTimeString([], {timeStyle: "short"})}</span>
                </p>
                <p className='Box'>
                    <span className='Temp-label'>sunset<br/></span>
                    <span className='Temp-value'>{sunsetDate.toLocaleTimeString([], {timeStyle: "short"})}</span>
                </p>
            </div>
            <div className='Button-box'>
                <button onClick={handleWeather} className='Button'>refresh weather</button>
            </div>
        </div>
    )

}
export default Weather;