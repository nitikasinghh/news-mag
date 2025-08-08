import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // Debugging
                if (Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    setArticles([]); // Fallback if API fails or has no articles
                }
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setArticles([]); // Fallback on fetch error
            });
    }, [category]);

    return (
        <div>
            <h2 className='text-center'>
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))
            ) : (
                <p className="text-center">No news available right now.</p>
            )}
        </div>
    );
};

export default NewsBoard;
