import React, { useState } from "react";
import "../css/Login.css";

const Login = ({ view, setView, onClose }) => {
    const [isPwFinderModalOpen, setIsPwFindModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false); // 서비스 약관 모달 상태
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false); // 개인정보 처리방침 모달 상태

    const openPwFinderModal = () => setIsPwFindModalOpen(true);
    const closePwFinderModal = () => setIsPwFindModalOpen(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    return (
        <div className="login-modal-overlay">
            <div className="login-modal-content">
                {view === "null" && (
                    <>
                        <div className="login-logo">
                            <img className="login-logocon" src="../icon/logo.png" alt="로그인 화면 로고" />
                        </div>
                        <h2>로그인이 필요합니다</h2>
                        <p>계속 진행하려면 로그인 또는 회원가입을 해주세요.</p>
                        <div>
                            <button onClick={() => setView("login")}>로그인</button>
                            <button onClick={() => setView("signup")}>회원가입</button>
                        </div>
                    </>
                )}

                {view === "default" && (
                    <>
                        <div className="login-logo">
                            <img className="login-logocon" src="../icon/logo.png" alt="로그인 화면 로고" />
                        </div>
                        <h2>로그인이 필요합니다</h2>
                        <p>계속 진행하려면 로그인 또는 회원가입을 해주세요.</p>
                        <div>
                            <button onClick={() => setView("login")}>로그인</button>
                            <button onClick={() => setView("signup")}>회원가입</button>
                        </div>
                    </>
                )}

                {view === "login" && (
                    <>
                        <div className="login-logo" style={{marginTop:"10px", backgroundColor:"black"}}>
                            <img className="login-logocon" src="../icon/logo.png" alt="로그인 화면 로고" />
                        </div>
                        <h2 style={{marginTop:"10px"}}>For Your Page에</h2><h2 style={{marginTop:"-12px"}}>오신 것을 환영합니다</h2>
                        <div className="login-info">
                            <label htmlFor="email"> 이메일</label>
                            <input type="email" id="email" placeholder="이메일을 입력하세요" />
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
                            <p className="link" onClick={openPwFinderModal}>비밀번호를 잊으셨나요?</p>
                            <div className="button-group">
                                <button style={{color:"white",backgroundColor:"rgb(255, 41, 41)"}} onClick={() => alert("로그인 처리")}>로그인</button>
                            </div>
                            <p style={{marginTop:"20px"}}>
                                계속 진행하면 
                                <span className="link" onClick={openTermsModal}> 서비스 약관</span>에 동의하고 
                                <span className="link" onClick={openPrivacyModal}> 개인정보 처리방침</span>을 읽었음을 인정하는 것으로 간주됩니다.
                            </p>
                            <div style={{borderBottom:"1px solid #ddd"}} />
                            <p className="link" onClick={() => setView("signup")}>아직 For Your Page를 사용하고 있지 않으신가요? 가입하기</p>
                            {/* 비밀번호 찾기 모달 */}
                            {isPwFinderModalOpen && (
                                    <div className="modal2-overlay">
                                        <div className="modal2-content">
                                            <h3>비밀번호 찾기</h3>
                                            <p>여기에 비밀번호 찾기 내용을 작성하세요.</p>
                                            <button onClick={closePwFinderModal}>닫기</button>
                                        </div>
                                    </div>
                                )}
                            {/* 서비스 약관 모달 */}
                                {isTermsModalOpen && (
                                    <div className="modal2-overlay">
                                        <div className="modal2-content">
                                            <h3>서비스 약관</h3>
                                            <p>여기에 서비스 약관 내용을 작성하세요.</p>
                                            <button onClick={closeTermsModal}>닫기</button>
                                        </div>
                                    </div>
                                )}

                            {/* 개인정보 처리방침 모달 */}
                                {isPrivacyModalOpen && (
                                    <div className="modal2-overlay">
                                        <div className="modal2-content">
                                            <h3>개인정보 처리방침</h3>
                                            <p>여기에 개인정보 처리방침 내용을 작성하세요.</p>
                                            <button onClick={closePrivacyModal}>닫기</button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </>
                )}

                {view === "signup" && (
                    <>
                        <h2>회원가입</h2>
                        <div>
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" placeholder="이메일을 입력하세요" />
                        </div>
                        <div>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password">비밀번호 확인</label>
                            <input type="password" id="confirm-password" placeholder="비밀번호를 다시 입력하세요" />
                        </div>
                        <div>
                            <label htmlFor="nickname">닉네임</label>
                            <input type="text" id="nickname" placeholder="닉네임을 입력하세요" />
                        </div>
                        <div className="button-group">
                            <button style={{color:"white",backgroundColor:"rgb(255, 41, 41)"}} onClick={() => alert("회원가입 처리")}>회원가입</button>
                            <button onClick={() => setView("default")}>닫기</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
