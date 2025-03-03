import { useEffect, useState } from "react";
import axios from "axios";
import NewsBox from "./NewsBox";

const categories = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const News = () => {
  const [mainNews, setMainNews] = useState(null);
  const [news, setNews] = useState([]);
  const [pickedCategory, setPickedCategory] = useState("general");
  const [showNewsBox, setShowNewBox] = useState(false);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiURL = `https://gnews.io/api/v4/top-headlines?category=${pickedCategory}&lang=en&apikey=603cbcf4565359b2564693585aa346e1`;

      const responseNews = await axios.get(apiURL);

      const mainNewsFetched = responseNews.data.articles[0];

      const restNews = responseNews.data.articles.slice(1, 7);

      setMainNews(mainNewsFetched);
      setNews(restNews);
    };
    fetchNews();
  }, [pickedCategory]);

  const handleSelectCategories = (e, category) => {
    e.preventDefault();
    setPickedCategory(category);
  };

  const handleShowSelectArticle = (article) => {
    setSelectedNewsArticle(article);
    setShowNewBox(true);
  };

  return (
    <div className="container">
      {!showNewsBox ? (
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
                  {categories.map((category) => {
                    return (
                      <li key={category} className="list-item">
                        <a
                          key={category}
                          onClick={(e) => handleSelectCategories(e, category)}
                          href=""
                        >
                          {category}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="news-box">
              <div className="latest-news">
                <h2>Latest news</h2>
                {mainNews && (
                  <div
                    className="main-news"
                    onClick={() => handleShowSelectArticle(mainNews)}
                  >
                    <img src={mainNews.image} alt={mainNews.title} />
                    <h2>{mainNews.title}</h2>
                  </div>
                )}

                <div className="news-items">
                  {news &&
                    news.map((n, ind) => {
                      return (
                        <div
                          key={ind}
                          className="news-item"
                          onClick={() => handleShowSelectArticle(n)}
                        >
                          <img src={n.image} alt={n.title} />
                          <h5 className="news-item-title">{n.title}</h5>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NewsBox
          selectedNewsArticle={selectedNewsArticle}
          showNewsBox={showNewsBox}
          onCloseNewsBox={() => setShowNewBox(false)}
        />
      )}
    </div>
  );
};

export default News;
