import React from 'react';

const Quote = ({ text, author }) => {
    return (
        <blockquote>
            <p>{text}</p>
            <footer>{author}</footer>
        </blockquote>
    );
};

export default Quote;
