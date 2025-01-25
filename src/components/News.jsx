import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [mainNews, setMainNews] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiURL = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=603cbcf4565359b2564693585aa346e1`;

      const responseNews = await axios.get(apiURL);

      const mainNewsFetched = responseNews.data.articles[0];

      const restNews = responseNews.data.articles.slice(1, 7);

      setMainNews(mainNewsFetched);
      setNews(restNews);
      // console.log(mainNews);
      console.log(restNews);
    };
    fetchNews();
  }, []);

  return (
    <div className="news-app">
      <div className="header">
        <h1 className="logo">
          GNews Clone <i className="fa-solid fa-rss"></i>
        </h1>
        <a href="">
          <i className="fa-solid fa-code"></i>
        </a>
      </div>
      <div className="content">
        <div className="categories-box">
          <div className="title">
            <h2>Categories</h2>
          </div>
          <div className="categories">
            <ul className="list">
              <li className="list-item">
                <a href="">Robots</a>
              </li>
              <li className="list-item">
                <a href="">Internet</a>
              </li>
              <li className="list-item">
                <a href="">Automotive</a>
              </li>
              <li className="list-item">
                <a href="">Games</a>
              </li>
              <li className="list-item">
                <a href="">AI</a>
              </li>
              <li className="list-item">
                <a href="">Medical</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="news-box">
          <div className="latest-news">
            <h2>Latest news</h2>
            {mainNews && (
              <div className="main-news">
                <img src={mainNews.image} alt={mainNews.title} />
                <h2>{mainNews.title}</h2>
              </div>
            )}

            <div className="news-items">
              {news &&
                news.map((n, ind) => {
                  return (
                    <div key={ind} className="news-item">
                      <img src={n.image} alt={n.title} />
                      <h5 className="news-item-title">{n.title}</h5>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default News;
