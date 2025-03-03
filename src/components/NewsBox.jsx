import React from "react";

const NewsBox = ({ selectedNewsArticle, showNewsBox, onCloseNewsBox }) => {
  if (!showNewsBox) {
    return null;
  }

  return (
    <div className="news-modal-box">
      <div className="news-modal-content">
        <div className="news-image">
          <img src={selectedNewsArticle.image} alt="" />
        </div>
        <div className="news-title">
          <h1>{selectedNewsArticle.title}</h1>
        </div>
        <div className="news-source-date">
          <h2 className="news-source">
            Source: {selectedNewsArticle.source.name}
          </h2>
          <h2 className="news-date">Date: {selectedNewsArticle.publishedAt}</h2>
        </div>
        <div className="news-description">
          <p>{selectedNewsArticle.content}</p>
          <div className="news-buttons">
            <a className="read-more" href={selectedNewsArticle.source.url}>
              Read more
            </a>
            <button onClick={onCloseNewsBox} className="button close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
