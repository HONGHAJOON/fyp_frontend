import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/PostDetail.css";
import Postlist from "./Postlist";

const PostDetail = () => {
    const [items, setItems] = useState(
            Array.from({ length: 1 }, (_, i) => ({
                id: i,
                title: `제목 예시`,
                img: `../icon/how1.jpg`,
                prof: `../icon/how1.jpg`,
                nick: `작성자 ${i + 1}`,
                text: `외 않되 왜 않돼? 왜 안돼? 외 않되? 애 안대? 으쯔라고요 어쩌라고요 우짜라고요 으뜩하라고요`,
            }))
        );

    return (
        <div>
            <div className="contentContainer" >        
                <div style={{margin:"20px"}}>    
                <img src="../icon/arrow.png" style={{flexDirection:"column"}}/>
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
                                <img src="../icon/heart-3.png" className="actionIcon" style={{marginTop:"2px"}}/>
                                <img src="../icon/bookmark-3.png" className="actionIcon"/>
                            </div>
                            {item.title?.trim() && (
                                    <h4 className="contentTitle">{item.title}</h4>
                            )}
                            <div className="profileContainer">
                                <Link to={`/${item.prof}`} className="profile">
                                    <img className="profile" src={item.prof} alt="프로필" />
                                </Link>
                                <Link to={`/${item.nick}`} className="nickLink">
                                    <p className="nick">{item.nick}</p>
                                </Link>
                            </div>
                            <div style={{textAlign:"left",overflowX:"hidden",overflowY:"scroll"}}>
                                <p>{item.text}</p>
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