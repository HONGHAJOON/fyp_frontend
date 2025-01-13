import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { nick } = useParams(); // URL에서 닉네임 가져오기
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`/api/users/${nick}`); // 서버에 요청
                const data = await response.json();
                setUserData(data); // 받아온 데이터 저장
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        };
        fetchUserProfile();
    }, [nick]);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            
        </div>
    );
};
export default UserProfile;