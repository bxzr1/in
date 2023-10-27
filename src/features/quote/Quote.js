import React, { useEffect } from 'react';
import { selectQuote, failedToLoadQuote, loadQuote, isLoadingQuote } from './quoteSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Quote.css';
import '../features.css';

function Quote() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadQuote(''));
    }, [])

    const handleNewQuote = (e) => {
        e.preventDefault();
        dispatch(loadQuote(''));
    }

    return (
        <div className='Quote'>
            <div className='Quote-display'>
                <h3>{quote.q} --{quote.a}&nbsp;</h3>
                <button 
                    onClick={handleNewQuote} 
                    className='Button Button-icon'>
                        ↻
                </button>
            </div>
            <p className='Caption'>
                Inspirational quotes provided by <a href='https://zenquotes.io/' target='_blank'>ZenQuotes API</a>
            </p>
        </div>
    )

}
export default Quote;