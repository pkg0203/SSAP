import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Story from "../pages/Story";
import Community from "../pages/Community";
import Profile from "../pages/Profile";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="story" element={<Story />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;