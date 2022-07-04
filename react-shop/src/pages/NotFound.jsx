import React from 'react';
import '@style/NotFound.scss';
import notFoundPage from '@logos/undraw.svg';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-info">
                <img src={notFoundPage} alt="" className="not-found" />
                <h1 className="not-found-title">404 Not Found</h1>
                <h2 className="message">It seems like we couldn't find the page you were looking for.</h2>
                <button className="primary-button">Go back</button>
            </div>
        </div>
    );
}

export default NotFound;