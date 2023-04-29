import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {id ? <h5>Dragon News</h5> : <h4>All Category News</h4>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;