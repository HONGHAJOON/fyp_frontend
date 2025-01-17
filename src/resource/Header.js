import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from "./Alert";
import Message from './Message';
import '../css/Header.css';

const Header = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [notifications, setNotifications] = useState([
        { message: "새 메시지가 도착했습니다.", sender: "유경", type: "메시지" },
        { message: "사용자가 좋아요를 눌렀습니다.", sender: "김철수", type: "좋아요" },
        // 추가 알림 데이터
    ]);
    const [isMessageOpen, setIsMessageOpen] = useState(false);

    const toggleMessageModal = () => {
        setIsMessageOpen((prev) => !prev);
    };

    return (
        <>
            <div className='header'>
                <div className='headerLeft'>
                    <div className='logo'>
                        <Link to="/">
                            <img className="logoCon" src='../icon/logo.png'alt="홈" />
                        </Link>
                    </div>
                    <div className='iconBox'>
                        <Link to="/">
                            <img className="icon" src='../icon/home-2.png'alt="홈" />
                        </Link>
                    </div>
                    <div className='iconBox'>
                        <Link to="/create-page">  {/* 게시물 작성 페이지로 가는 링크 */}
                            <img className='icon' src='../icon/add-2.png' alt="게시물 작성" />
                        </Link>
                    </div>
                </div>
                <input type="text" class="searchBar" placeholder="...검색" />
                <div className='headerRight'>
                    <div className='iconBox'><img className='icon' src='../icon/bell-2.png' onClick={() => setShowAlert(!showAlert)}/></div>
                        {showAlert && (
                            <Alert
                            notifications={notifications}
                            onClose={() => setShowAlert(false)}
                            />
                        )}
                    <div className='iconBox'><img className='icon' src='../icon/typing-2.png' onClick={toggleMessageModal} alt="Messages"/></div>
                        {isMessageOpen && <Message onClose={toggleMessageModal} />}
                    <div className='iconBox'>
                        <Link to="/:nick">
                            <img className='headerProfile' src='../icon/how2.jpg' alt="회원정보" />
                        </Link>
                    </div>
                    <div className='iconBox'><img className='icon' src='../icon/down-2.png'/></div>
                </div>
            </div>
        </>
    )
}
export default Header;