import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="story" element={<Story />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;