import React from 'react'
import APiClient from './api/APiClient'
import Pagenation from './pagenation/Pagenation'

const Community = () => {
  return (
      <div className="community-container">
          <header className="community-header">
              <h1>SSAP</h1>
              <p>All tips for your life in Korea</p>
              <nav className="community-nav">
                  <a href="/contents">Contents</a>
                  <a href="/community" className="active">Community</a>
                  <button className="signup-btn">Sign Up</button>
              </nav>
          </header>
          <main className="community-main">
              <div className="community-content">
                  <h2>Contents Title</h2>
                  <div className="community-post">
                      <img src="path/to/image.jpg" alt="Profile" className="community-profile-img"/>
                      <div>
                          <h3>Name</h3>
                          <p>Description</p>
                      </div>
                  </div>
                  <p className="community-body-text">
                      “Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations. Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations. Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations. Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations. Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations.”
                  </p>
              </div>
              <div className="community-comments">
                  <div className="community-comment">
                      <img src="path/to/image.jpg" alt="Profile" className="community-profile-img"/>
                      <div>
                          <h3>Name</h3>
                          <p>“Body text for a post. Since it’s a social app, sometimes it’s an observation, and sometimes it’s seeking recommendations.”</p>
                      </div>
                  </div>
                  {/* 더 많은 댓글 추가 가능 */}
              </div>
          </main>
      </div>
  );
};

export default Community;