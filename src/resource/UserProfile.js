import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Postlist from "./Postlist";
import { useUsers } from "./User";
import "../css/UserProfile.css";

const UserProfile = () => {
    const { id } = useParams();
    const users = useUsers();
    const user = users.find(u => u.id === id);  // URL 파라미터로 받은 ID로 사용자 찾기
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (!user) {
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch(`/api/users/${id}`);
                    const data = await response.json();
                    setUserData(data); // 서버에서 데이터를 받아옴
                } catch (error) {
                    console.error("Failed to fetch user profile:", error);
                }
            };
            fetchUserProfile();
        } else {
            setUserData(user); // users에서 가져온 데이터 설정
        }
    }, [id, user]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <div>
                <img className="user-profile-img"
                    src={user.profileImage} 
                    alt={`${user.nick}님의 프로필 이미지`} />
                    <div className="user-page-box">
                        <h1>{user.nick}의 페이지</h1>
                        <img className="edit-button" src="../icon/edit.png" alt="프로필 수정"/>
                    </div>
                    <div className="user-id-box">
                        <div className="user-id-logo">
                            <img className="user-logocon" src="../icon/logo.png" alt="logo"/>
                        </div>
                        <p>{user.id}</p>
                    </div>
            </div>
            <div style={{height:"50px"}}></div>
            <div>
                <button className="profile-button">생성됨</button>
                <button className="profile-button">저장됨</button>
            </div>
            <Postlist posts={user.posts} />
        </div>
    );
};
export default UserProfile;