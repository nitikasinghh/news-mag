import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setErrorMsg("");
            try {
               const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                console.log("API Response:", data);

                if (Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    setArticles([]);
                    setErrorMsg(data.message || "No articles found.");
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setArticles([]);
                setErrorMsg("Failed to load news. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h2 className='text-center'>
                Latest <span className="badge bg-danger">News</span>
            </h2>

            {/* Loading */}
            {loading && <p className="text-center">Loading news...</p>}

            {/* Error */}
            {!loading && errorMsg && (
                <p className="text-center text-danger">{errorMsg}</p>
            )}

            {/* News List */}
            {!loading && !errorMsg && articles.length > 0 && (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news?.title || "No Title Available"}
                        description={news?.description || ""}
                        src={news?.urlToImage}
                        url={news?.url}
                    />
                ))
            )}

            {/* No News */}
            {!loading && !errorMsg && articles.length === 0 && (
                <p className="text-center">No news available right now.</p>
            )}
        </div>
    );
};

export default NewsBoard;
