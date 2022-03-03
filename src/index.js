import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./index.scss";

import Front from "./views/Front";
import Loading from "./views/Loading";
const Contact = React.lazy(() => import("./views/Contact"));
const Timeline = React.lazy(() => import("./views/Timeline"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="RikThePixel">
      <Routes>
        <Route path='/'>
          <Route index element={<Front />} />
          <Route path='Timeline' element={
            <Suspense fallback={<Loading />}>
              <Timeline />
            </Suspense>}
          />
          <Route path='Contact' element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('react-root')
);