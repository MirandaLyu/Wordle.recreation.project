/* this is a file that is used to render the react app to the DOM.
  It is the entry point of the app. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Rules from './Rules';
import ChooseDifficulty from './ChooseDifficulty';
import NormalVersion from './NormalVersion';
import HardVersion from './HardVersion';
import { NormalProvider } from './NormalProvider';
import { HardProvider } from './HardProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/rules",
    element: <Rules />
  },
  {
    path: "/game",
    element: <ChooseDifficulty />
  },
  {
    path: "/game/normal",
    element: <NormalVersion />
  },
  {
    path: "/game/hard",
    element: <HardVersion />
  }


])


root.render(
  // <React.StrictMode>
    <HardProvider>
    <NormalProvider>
    <RouterProvider router={reactRouter} />
    </NormalProvider>
    </HardProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
