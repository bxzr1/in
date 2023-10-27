import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, loadPicture } from "./pictureSlice";
import './Picture.css';
import '../features.css';


function Picture() {
    const { name, username } = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPicture(''));
    }, [])

    useEffect(() => {
        const intervalID = setInterval(() => {
            dispatch(loadPicture(''));
        }, 1000*60*60); // 1000 ms * 60 s * 60 m = every hour
        return () => clearInterval(intervalID);
    }, [])

    const handleBackground = (e) => {
        e.preventDefault();
        dispatch(loadPicture(''));
    }

    return (
        <div className='Picture'>
            <p className='Caption'>Photo by&nbsp;
                <a href={`https://unsplash.com/@${username}?utm_source=InspirationalHomepage&utm_medium=referral`}>
                    {name}
                </a> on&nbsp;
                <a href=
                {`https://unsplash.com/?utm_source=InspirationalHomepage&utm_medium=referral`}>
                    Unsplash
                </a>
            </p>
            <button 
                className='Button' 
                onClick={handleBackground}>
                    new background
            </button>
        </div>
    )
}

export default Picture;