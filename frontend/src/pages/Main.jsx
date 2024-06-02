import React from "react";
import "./style.css";

const Main = () => {
  return (
    <div className="main">
      <div className="navigation">
        <div className="items">
          <div className="text-wrapper">Contents</div>
          <div className="div">Community</div>
        </div>
        <div className="text-wrapper-2">SSAP</div>
        <p className="p">All tips for your life in Korea</p>
        <button className="element-button">
          <div className="text-wrapper-3">Sign Up</div>
        </button>
      </div>
      <div className="recommended-article">
        <div className="recommended-article-2">
          Recommended
          <br />
          Article
        </div>
        <div className="projects">
          <div className="card">
            <div className="image" />
            <div className="copy">
              <div className="text-wrapper-4">Content title</div>
              <div className="text-wrapper-5">Description of content</div>
            </div>
          </div>
          <div className="card">
            <div className="image-2" />
            <div className="copy-2">
              <div className="text-wrapper-4">Content title</div>
              <div className="text-wrapper-5">Description of content</div>
            </div>
          </div>
          <div className="card">
            <div className="image-3" />
            <div className="copy-2">
              <div className="text-wrapper-4">Content title</div>
              <div className="text-wrapper-5">Description of content</div>
            </div>
          </div>
          <div className="card">
            <div className="image-4" />
            <div className="copy-2">
              <div className="text-wrapper-4">Content title</div>
              <div className="text-wrapper-5">Description of content</div>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar">
        <div className="name">
          <div className="content">일정을 확인하세요</div>
        </div>
        <div className="calendar-image" />
      </div>
      <footer className="footer">
        <div className="text-wrapper-6">Contact Us</div>
        <div className="social-icons">
          <div className="buttons-icon">
            <div className="icon">
              <img className="img" alt="Icon" src="icon.svg" />
            </div>
          </div>
          <div className="buttons-icon">
            <div className="icon">
              <img className="icon-2" alt="Icon" src="icon-2.svg" />
            </div>
          </div>
          <div className="buttons-icon">
            <div className="icon">
              <img className="img" alt="Icon" src="icon-3.svg" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;