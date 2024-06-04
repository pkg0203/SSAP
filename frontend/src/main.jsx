// 경로 지정 & 라우터 관리

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './componenets/ErrorPage.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
import Search from './pages/Search.jsx'
import Calendar from './componenets/Calendar/Calendar.jsx'
import SingleContent from './pages/contents/SingleContent.jsx'
import Contents from './pages/contents/Contents.jsx'
import Community from './pages/community/community.jsx'
import Login from './pages/login/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/contents",
        element: <Contents />,
      },
      {
        path: "/contents/:id",
        element: <SingleContent />,
        loader: ({ params }) => fetch(`https://localhost:5000/api/contents/${params.id}`),
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
