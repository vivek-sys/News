import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Use env variable (place in .env file: REACT_APP_NEWS_API_KEY=your_key)
    const apiKey = "af4122f02cb847e68d4a69f97f978e1d";

    useEffect(() => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;


        const fetchNews = async () => {
            setLoading(true);

            // ✅ Define the URL here
        //   const url = `http://localhost:5000/api/news?category=${category}`;


            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();

                if (data.status !== 'ok') {
                    throw new Error(`API Error: ${data.message || 'Unexpected error'}`);
                }

                setArticles(data.articles);
                setError(null);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message || 'Something went wrong.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, apiKey]);

    const defaultImage =
        "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description || "Top Headlines"}
                        src={news.urlToImage || defaultImage}
                        url={news.url}
                    />
                ))
            ) : (
                <p>No articles available.</p>
            )}
        </div>
    );
};

export default NewsBoard;