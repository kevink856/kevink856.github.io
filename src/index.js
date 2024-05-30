// Import Dependencies
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

// Import Components
import BlogHome from './components/BlogHome.js';
import LandingPage from './components/LandingPage.js';
import Blog from './components/Blogs.js'

// Create router to redirect by refreshing (HashRouting is not supported for GitHub Pages)
const routes = [
    // Lists site URL endpoints and the respective pages to load
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/blogs",
        element: <BlogHome />
    },
    {
        path: "/blogs/pathtracer",
        element: <Blog index = {0} />
    },
    {
        path: "/blogs/pathtracer_done",
        element: <Blog index = {1} />
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter(routes, { basename: "/" });

// Render entire app, and use StrictMode to prevent bad compiling
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
        <Outlet />
    </RouterProvider>
  </React.StrictMode>
);

// Measure performance and other vitals
reportWebVitals(console.log);