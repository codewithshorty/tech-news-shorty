import React, { useState } from "react";

const TechNews = () => {
  const [news, setNews] = useState([]);

  return (
    <div className="news-app">
      <div className="header">
        <h1 className="logo">
          Tech News <i className="fa-solid fa-rss"></i>
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
              <li className="list-item">
                <button onClick={() => fetchNews()}>Ucitaj</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="news-box">
          <div className="latest-news">
            <h2>Latest news</h2>
            <div className="main-news">
              <img src="https://picsum.photos/id/237/700/200" alt="" />
              <h4>Main news</h4>
            </div>
            <div className="news-items">
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>{" "}
              <div className="news-item">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <h5 className="news-item-title">Title 1</h5>
              </div>
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

export default TechNews;
