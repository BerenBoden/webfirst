import React from 'react';
import Navigation from './Navigation';
import './Blog.scss';

const Blog = (props) => {
    return (
        <div>
            <Navigation />
            <h1 className="blog__header">{props.title}</h1>
        </div>
    )
}

export default Blog
