import React, { useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import "../css/Postlist.css";
import { Link, useNavigate } from 'react-router-dom';

const Postlist = () => {
    const [items, setItems] = useState(
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            title: `게시물 ${i + 1}`,
            img: `../icon/how${(i % 10) + 1}.jpg`,
            prof: `../icon/how1.jpg`,
            nick: `작성자 ${i + 1}`,
        }))
    );

    const navigate = useNavigate(); // useNavigate 훅 초기화

    const handleImageClick = (id) => {
        navigate(`/page/${id}`); // 페이지 이동
    };

    const loadMoreItems = () => {
        const newItems = Array.from({ length: 10 }, (_, i) => ({
            id: items.length + i,
            title: `게시물 ${items.length + i + 1}`,
            img: `icon/how${((items.length + i) % 10) + 1}.jpg`,
            prof: `icon/how1.jpg`,
            nick: `작성자 ${items.length + i + 1}`,
        }));
        setItems((prev) => [...prev, ...newItems]);
    };
    

    return (
        <div style={{ margin: "0 auto"}} className="postList">
            {/* <div style={{ marginTop: "80px"}}></div> */}
            <MasonryInfiniteGrid
                gap={7} // 아이템 간격
                onRequestAppend={loadMoreItems} // 스크롤 끝에서 호출
                useResizeObserver={true} // 리사이즈 감지
                useRecycle={true} // 스크롤 성능 향상
                align="center" 
            >
                {items.map((item) => (
                    <div key={item.id} className="postBox">
                        <img
                            className="postIMG"
                            src={item.img}
                            alt={item.title}
                            onClick={() => handleImageClick(item.id)}
                            style={{ cursor: "pointer" }}
                        />
                         {item.title?.trim() && (
                            <Link to={`/page/${item.id}`} className="titleLink">
                                <h4 className="postTitle">{item.title}</h4>
                            </Link>
                        )}
                        <div className="profileContainer">
                            <Link to={`/${item.prof}`} className="profile">
                                <img className="profile" src={item.prof} alt="프로필" />
                            </Link>
                            <Link to={`/${item.nick}`} className="nickLink">
                                <p className="nick">{item.nick}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </MasonryInfiniteGrid>
        </div>
    );
};

export default Postlist;
