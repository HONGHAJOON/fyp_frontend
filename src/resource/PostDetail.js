import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../css/PostDetail.css";
import Postlist from "./Postlist";
import Comment from "./Comment";

const PostDetail = () => {
    const [items, setItems] = useState(
            Array.from({ length: 1 }, (_, i) => ({
                id: i,
                title: `제목 예시`,
                img: `../icon/how1.jpg`,
                prof: `../icon/how1.jpg`,
                nick: `작성자 ${i + 1}`,
                text: `외 않되 왜 않돼? 왜 안돼? 외 않되? 애 안대? 으쯔라고요 어쩌라고요 우짜라고요 으뜩하라고요 스크롤 니가 뭔데 날 울려 날 울려 어떻게 니가 날 떠나가~ 스크롤 왜 않보여 외 않보여? 외 않되 왜 않도ㅐ 외안대?`,
            }))
        );

    const navigate = useNavigate();

    return (
        <div>
            <div className="contentContainer" >        
                <div>    
                <img src="../icon/arrow.png" className="arrow" onClick={() => navigate(-1)}/>
                </div>
                <div style={{margin:"20px"}}>
                    {items.map((item) => (
                    <div key={item.id} className="contentBox">
                        <div className="contentLeft">
                        <img
                            className="contentIMG"
                            src={item.img}
                        />
                        </div>
                        <div className="contentRight">
                            <div className="actionBar">
                                <img src="../icon/heart-3916579.png" className="actionHeart" />
                                <img src="../icon/bookmark-3916593.png" className="actionSave"/>
                            </div>
                            {item.title?.trim() && (
                                    <h4 className="contentTitle">{item.title}</h4>
                            )}
                            <div className="content-user-container">
                                <Link to={`/${item.prof}`} className="user-profile">
                                    <img className="profile" src={item.prof} alt="프로필" />
                                </Link>
                                <Link to={`/${item.nick}`} className="nickLink">
                                    <p className="nick">{item.nick}</p>
                                </Link>
                            </div>
                            <div className="contentContext">
                                <p>{item.text}</p>
                                <Comment/>
                            </div>
                            <div className="inputContainer">
                                <input type="text" class="commentInput" placeholder="댓글을 추가하고 대화를 시작해보세요." />
                                <button class="commentButton">등록</button>
                            </div>
                        </div>
                    </div>
                ))}
                
                </div>

            </div>
            <Postlist/>
        </div>
    );
};
export default PostDetail;