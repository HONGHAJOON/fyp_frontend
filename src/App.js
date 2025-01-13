import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './resource/Header';
import Postlist from './resource/Postlist';
import PostDetail from './resource/PostDetail';
import UserProfile from "./resource/UserProfile";

function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          {/* Home 라우트 */}
          <Route path="/" element={<Postlist />} />

          {/* 게시물 상세 페이지 라우트 */}
          <Route path="/page/:id" element={<PostDetail />} />

          {/* 회원 프로필 라우트 */}
          <Route path="/:nick" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
