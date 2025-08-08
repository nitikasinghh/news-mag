import React from 'react';
import image from '../assets/news.jpg';

const NewsItem = ({title,description,src,url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px" , width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"The American Petroleum Institute (API) reported a significant draw of 4.69 million barrels in US crude inventories for the week ending December 13. "}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    );
}

export default NewsItem;
