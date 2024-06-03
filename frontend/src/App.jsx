import React from "react";
import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import FetchUser from './FetchUser'

import Navbar from './Components/Navbar/Navbar'
import Article from "./pages/Article"
import Story from "./pages/Story"
import Community from "./pages/Community"
import Profile from "./pages/Profile"
import Main from "./pages/Main"

function App() {
  const navigate = useNavigate()
  const [userInfos, setUserInfos] = useState([{}])
  const [authenticated, setAuthenticated] = useState(false)
  const checkAuthentication = async () => {
    try {
        const isAuthenticated = await FetchUser()
        setAuthenticated(isAuthenticated)
    } catch (error) {
        console.error('Error occurred while fetching user:', error)
    }
  }

  useEffect(() => {
      checkAuthentication()
      if (!authenticated) {
          navigate(window.location.pathname, { replace: true })
      } else {
          const token = localStorage.getItem('accessToken')
          const decoded = jwtDecode(token)
          setUserInfos(decoded)
      }
  }, [navigate, authenticated]) // navigate를 의존성 배열에 추가
  return (
    <>
      <Navbar username={userInfos.username} />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="article/" element={<Article />} />
        <Route path="story/" element={<Story />} />
        <Route path="community/" element={<Community />} />
        <Route path="profile/" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;
