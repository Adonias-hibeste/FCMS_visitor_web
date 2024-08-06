/* eslint-disable no-unused-vars */
// src/components/News.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=football&apiKey=YOUR_API_KEY');
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className='p-4'>
      {news.map((article, index) => (
        <div key={index} className='mb-8 p-4 border rounded shadow'>
          <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} className='w-full h-64 object-cover mb-4'/>
          <p className='mb-2'>{article.description}</p>
          <a href={article.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
