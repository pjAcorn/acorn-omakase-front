import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import Header from './common/Header';
import Footer from './common/Footer';



const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/*' element={<MainPage />} />
      <Route path='/post' element={<PostPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;