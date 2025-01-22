import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { UsersProvider } from "./resource/User";
import Header from './resource/Header';
import Postlist from './resource/Postlist';
import PostDetail from './resource/PostDetail';
import UserProfile from "./resource/UserProfile";
import CreatePost from './resource/CreatePost';
import Login from './resource/Login';

function App() {

//   const dummyUser = {
//     id: "123",
//     nick: "유경",
//     profileImage: "../icon/how2.jpg",
//     posts: [
//       { id: 1, content: "첫 번째 게시물" },
//       { id: 2, content: "두 번째 게시물" },
//   ],
// };

  return (
    <UsersProvider>
    <Router>
    <div className="App">
      <Header />
        <div style={{marginBottom:"80px"}}></div>
        <Routes>
          {/* Home 라우트 */}
          <Route path="/" element={<Postlist />} />

          {/* 게시물 상세 페이지 라우트 */}
          <Route path="/page/:id" element={<PostDetail />} />

          {/* 회원 프로필 라우트 */}
          {/* <Route path="/user/:id" element={<UserProfile user={dummyUser}/>} /> */}
          <Route path="/user/:id" element={<UserProfile />} />

          <Route path="/create-page" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes> 
    </div>
    </Router>
    </UsersProvider>
  );
}

export default App;
