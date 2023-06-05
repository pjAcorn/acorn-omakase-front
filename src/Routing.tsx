import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import Header from './common/Header';
import Footer from './common/Footer';
import LoginPage from './pages/MemberPage/LoginPage';
import SignupPage from './pages/MemberPage/SignupPage';


const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/*' element={<MainPage />} />
      <Route path='/posts' element={<PostPage/>} />
      <Route path='/posts' element={<PostPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;