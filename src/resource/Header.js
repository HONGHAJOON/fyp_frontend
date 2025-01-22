import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from './User';
import Alert from "./Alert";
import Message from './Message';
import Option from './Option';
import '../css/Header.css';

const Header = () => {
    const users = useUsers();
    const user = users.find(u => u.id === "1234");  // 예시로 ID를 찾아서 사용
    const [showAlert, setShowAlert] = useState(false);
    const [notifications, setNotifications] = useState([
        { message: "새 메시지가 도착했습니다.", sender: "유경", type: "메시지" },
        { message: "사용자가 좋아요를 눌렀습니다.", sender: "김철수", type: "좋아요" },
    ]);
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [isOptionOpen, setIsOptionOpen] = useState(false);

    const toggleMessageModal = () => {
        setIsMessageOpen((prev) => !prev);
    };

    const toggleOptionModal = () => {
        setIsOptionOpen((prev) => !prev);
    }

    return (
        <div className="header">
            <div className="headerLeft">
                {/* 로고 */}
                <div className="logo">
                    <Link to="/">
                        <img className="logoCon" src="../icon/logo.png" alt="로고" />
                    </Link>
                </div>
                {/* 기타 아이콘 */}
                <div className="iconBox">
                    <Link to="/">
                        <img className="icon" src="../icon/home-2.png" alt="홈" />
                    </Link>
                </div>
                <div className="iconBox">
                    <Link to="/create-page">
                        <img className="icon" src="../icon/add-2.png" alt="게시물 작성" />
                    </Link>
                </div>
            </div>
            <input type="text" className="searchBar" placeholder="...검색" />
            <div className="headerRight">
                <div className="iconBox">
                    <img
                        className="icon"
                        src="../icon/bell-2.png"
                        onClick={() => setShowAlert(!showAlert)}
                        alt="알림"
                    />
                    {showAlert && <Alert notifications={notifications} onClose={() => setShowAlert(false)} />}
                </div>
                <div className="iconBox">
                    <img
                        className="icon"
                        src="../icon/typing-2.png"
                        onClick={toggleMessageModal}
                        alt="메시지"
                    />
                    {isMessageOpen && <Message onClose={toggleMessageModal} />}
                </div>
                <div className="iconBox">
                    <Link to={`/user/${user.id}`}>
                        <img className="headerProfile" src={user.profileImage} alt="회원정보" />
                    </Link>
                </div>
                <div className="iconBox">
                    <img 
                        className="icon option-icon" 
                        src="../icon/down-2.png" 
                        onClick ={(e) => {
                            e.stopPropagation();
                            toggleOptionModal();
                        }}
                        alt="메뉴" 
                    />
                    {isOptionOpen && (<Option user={user} onClose={() => {
                                setIsOptionOpen(false); // 모달 닫기
                            }}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
