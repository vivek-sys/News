import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Use env variable (place in .env file: REACT_APP_NEWS_API_KEY=your_key)
    const apiKey = "af4122f02cb847e68d4a69f97f978e1d";
const articlesOnes = [
  {
    source: { id: "cnn", name: "CNN" },
    author: "Brad Lendon",
    title: "Thai-Cambodian conflict pits a well-equipped US ally against a weaker adversary with strong China links - CNN",
    description: "The deadly conflict on the Thai-Cambodian border pits a longtime United States ally with decades of experience against a relatively young armed force with close ties to China.",
    url: "https://www.cnn.com/2025/07/25/asia/thailand-cambodia-conflict-military-comparison-intl-hnk-ml",
    urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1246329694-20250725081507234.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-07-26T06:13:00Z",
    content: "The deadly conflict on the Thai-Cambodian border pits a longtime United States ally with decades of experience against a relatively young armed force with close ties to China.\r\nBangkok and Phnom Penh… [+6789 chars]"
  },
  {
    source: { id: "associated-press", name: "Associated Press" },
    author: null,
    title: "Nick Kurtz of Athletics becomes 1st MLB rookie to hit 4 homers in a game, matches total base record - AP News",
    description: "Nick Kurtz of the Athletics has become the first rookie in Major League Baseball history to hit four home runs in a game. He also matched the MLB record with 19 total bases against the Houston Astros on Friday night. Kurtz went deep in the second, sixth, eigh…",
    url: "https://apnews.com/article/athletics-nick-kurtz-four-homers-0e227910a0cd690ef26df5c9f45130a6",
    urlToImage: "https://dims.apnews.com/dims4/default/606223a/2147483647/strip/true/crop/6111x3437+0+318/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa1%2Fdf%2Fe96f33cde0a799afc877d80a98ab%2Ffbf7f79a4d90409ab871b31072628137",
    publishedAt: "2025-07-26T05:01:00Z",
    content: "HOUSTON (AP) Nick Kurtz already had three homers and five hits with his parents and godparents in attendance as he began his final at-bat with a chance to make history, but none of that was top of mi… [+3320 chars]"
  },
  {
    source: { id: "the-washington-post", name: "The Washington Post" },
    author: "Andrew Ackerman",
    title: "How a Fed tour sparked unexpected Trump praise for Powell - The Washington Post",
    description: "The president’s participation in a tour of the Fed had the makings of a public relations disaster for the central bank. But by Friday, the president was praising Powell.",
    url: "https://www.washingtonpost.com/business/2025/07/25/trump-powell-federal-reserve-interest-rates/",
    urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/C4QKBA432QJSXZTYMMG5SASAYI.JPG&w=1440",
    publishedAt: "2025-07-25T23:47:13Z",
    content: "President Donald Trumps tour of the Federal Reserves expansive office renovations on Thursday had the makings of a public relations disaster for the central bank.\r\nInstead, the meeting appeared to si… [+4354 chars]"
  }
];

    useEffect(() => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;


        // const fetchNews = async () => {
        //     setLoading(true);

        //     // ✅ Define the URL here
        // //   const url = `http://localhost:5000/api/news?category=${category}`;


        //     try {
        //         const response = await fetch(url);

        //         if (!response.ok) {
        //             throw new Error(`Error ${response.status}: ${response.statusText}`);
        //         }

        //         const data = await response.json();

        //         if (data.status !== 'ok') {
        //             throw new Error(`API Error: ${data.message || 'Unexpected error'}`);
        //         }

        //         setArticles(data.articles);
        //         setError(null);
        //     } catch (err) {
        //         console.error('Fetch error:', err);
        //         setError(err.message || 'Something went wrong.');
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchNews();
        setTimeout(()=>{
            setArticles(articlesOnes);
        },3000)
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