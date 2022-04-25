import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./index.scss";

import Front from "./views/Front";
import Layout from "./views/Layout";
import Loading from "./views/Loading";

const Projects = React.lazy(() => import("./views/Projects"));
const Timeline = React.lazy(() => import("./views/Timeline"));
const Contact = React.lazy(() => import("./views/Contact"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="RikThePixel">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Front />} />
          <Route path="Loading" element={<Loading />} />
          <Route path='Projects' element={
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>}
          />
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