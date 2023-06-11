import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import Header from './common/Header';
import Footer from './common/Footer';
import LoginPage from './pages/MemberPage/LoginPage';
import SignupPage from './pages/MemberPage/SignupPage';
import PostDetail from './pages/PostPage/PostDetail/PostDetail';
import AnalyzePage from './pages/AnalyzePage'
import CreatePost from './pages/PostPage/CreatePost';


const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/*' element={<MainPage />} />
      <Route path='/posts' element={<PostPage />} />
      <Route path='/posts/:idx' element={<PostDetail />} />
      <Route path='/posts/create' element={<CreatePost />}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} /> 
      <Route path='/analyze' element={<AnalyzePage />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;