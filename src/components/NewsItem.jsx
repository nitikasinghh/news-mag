import React from 'react';
import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div 
            className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" 
            style={{ maxWidth: "345px" }}
        >
            <img 
                src={src || image} 
                style={{ height: "200px", width: "330px" }} 
                className="card-img-top" 
                alt="News" 
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title ? title.slice(0, 50) : "No Title Available"}
                </h5>
                <p className="card-text">
                    {description
                        ? description.slice(0, 90)
                        : "No description available for this news article."}
                </p>
                <a 
                    href={url || "#"} 
                    className="btn btn-primary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
