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
import Community from './pages/community/Community.jsx'
import CommunityDetail from './pages/community/CommunityDetail.jsx'
import Login from './pages/login/Login.jsx'
import Registration from './pages/login/Registration.jsx'

import { RecoilRoot } from "recoil";


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
        loader: ({ params }) => fetch(`http://13.125.129.225/ssap/articles/${params.id}`),
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/community/:id",
        element: <CommunityDetail />,
        loader: ({ params }) => fetch(`http://13.125.129.225/ssap/stories/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />,
  </RecoilRoot>
)
