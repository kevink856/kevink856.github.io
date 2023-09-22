// Import Dependencies
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Components
import LandingPage from './components/LandingPage';

// Create router to redirect by refreshing (HashRouting is not supported for GitHub Pages)
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  // Lists site URL endpoints and the respective pages to load
  {
    path: "/",
    element: <LandingPage />,
  },],
  {
      basename: "/",
  },
);

// Render entire app, and use StrictMode to prevent bad compiling
root.render(
  <React.StrictMode>
    <RouterProvider
      router = {router}
    />
  </React.StrictMode>
);

// Measure performance and other vitals
reportWebVitals(console.log);