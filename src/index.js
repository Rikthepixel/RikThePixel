import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Front from "./views/Front";
import Loading from "./views/Loading";
import "./index.scss";

const Contact = React.lazy(() => import("./views/Contact"));
const Timeline = React.lazy(() => import("./views/Timeline"));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="RikThePixel">
      <Routes>
        <Route path='/' element={<Front />}>
          <Route
            path='Timeline'
            element={
              <Suspense fallback={<Loading />}>
                <Timeline />
              </Suspense>
            }
          />
          <Route
            path='Contact'
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('react-root')
);