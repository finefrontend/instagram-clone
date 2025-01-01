import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('./pages/Home'));

const CreateFeed = lazy(() => import('./pages/CreateFeed'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create-feed" element={<CreateFeed />} />
      </Routes>
    </Suspense>
  );
};

export default App;
