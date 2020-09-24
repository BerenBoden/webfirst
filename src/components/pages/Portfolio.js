import React from 'react';
import Navigation from './Navigation';
import './Portfolio.scss';

const Portfolio = (props) => {
    return (
        <div>
            <Navigation />
            <h1 className="portfolio__header">{props.title}</h1>
        </div>
    )
}

export default Portfolio
