import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Login from './pages/LoginPage';
import PostDetail from './pages/PostPage/PostDetail';


const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/*' element={<MainPage />} />
      <Route path='/posts' element={<PostPage/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/posts/:idx' element={<PostDetail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;