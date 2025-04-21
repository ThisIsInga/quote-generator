import React, { useState, useEffect } from 'react';
import Quote from './Quote';

// Импортируем локальные цитаты
import quotes from './../Quotes.json';

const QuoteGenerator = () => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    // Функция выбора случайной цитаты из локального массива
    const fetchQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const { q, a } = quotes[randomIndex];
        setText(q);
        setAuthor(a);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-generator">
            {text && author ? (
                <Quote text={text} author={author} />
            ) : (
                <p>Загрузка цитаты...</p>
            )}
            <button onClick={fetchQuote}>Получить новую цитату</button>
        </div>
    );
};

export default QuoteGenerator;
