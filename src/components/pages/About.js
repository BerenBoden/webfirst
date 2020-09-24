import React from 'react';
import Navigation from './Navigation';
import './About.scss';

const About = (props) => {
    return (
        <div>
            <Navigation />
    <h1 className="about__header">{props.title}</h1>
        </div>
    )
}

export default About
