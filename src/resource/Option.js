import React, { useState, useEffect } from "react";
import Login from "./Login";
import "../css/Option.css";

const Option = ({ user, onClose }) => {
    const [view, setView] = useState("null"); // view 상태 관리

    const handleOpenLogin = () => setView("login");
    const handleOpenSignup = () => setView("signup");
    const handleCloseLogin = () => setView("default");

    const handleLogout = () => {
        // 로그아웃 처리 (예: 세션, 쿠키 삭제 등)
        // 이후 로그인 페이지로 이동
        setView("default");
        // 로그인 화면으로 자동 전환
        handleOpenLogin();
    };

    // useEffect를 사용해 view 상태가 변경될 때마다 로그 출력
    useEffect(() => {
        console.log("view 상태 변경됨: ", view);
    }, [view]); // view 값이 변경될 때마다 실행

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".option-modal") && !event.target.closest(".option-icon")) {
                onClose(); // 모달 닫기
                setView("default"); // 상태 초기화
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="option-modal">
            <div className="option-header">
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>현재 로그인 계정</p>
                <div className="currunt-user-info">
                    {user ? (
                        <>
                            <img className="profile-img" src={user.profileImage} alt={`${user.nick}님의 프로필 이미지`} />
                            <div className="nick-mail">
                                <p style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "2px" }}>
                                    {user.nick}
                                </p>
                                <p style={{ marginTop: "-2px" }}>{user.email}</p>
                            </div>
                        </>
                    ) : (
                        <p>현재 로그인 계정에 로그인 하세요.</p>
                    )}
                </div>
            </div>
            <div className="option-content">
                {user ? (
                    <div className="content-button-box">
                        <button className="option-button" onClick={handleLogout}>
                            로그아웃
                        </button>
                        <button className="option-button" onClick={handleOpenSignup}>
                            회원가입
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleOpenLogin}>로그인</button>
                        <button onClick={handleOpenSignup}>회원가입</button>
                    </div>
                )}
            </div>

            {/* Login 모달 띄우기 */}
            {(view === "login" || view === "signup" || view === "default") && (
                <Login view={view} setView={setView} onClose={handleCloseLogin} />
            )}
        </div>
    );
};

export default Option;
