import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/Comment.css";

const Comment = () => {
    const currentUserNick = "작성자 1"; // 현재 로그인한 사용자 닉네임
    const [comments, setComments] = useState(
        Array.from({ length: 5 }, (_, i) => ({
            id: i,
            prof: `../icon/how1.jpg`,
            nick: `작성자 ${i + 1}`,
            comm: `어쩔티비 쿠쿠루삥뽕  ${i + 1}`,
        }))
    );

    // useEffect(() => {
    //     const fetchComments = async () => {
    //         try {
    //             const response = await fetch("/api/comments"); // API 호출
    //             const data = await response.json();
    //             setComments(data);
    //         } catch (error) {
    //             console.error("댓글 데이터를 가져오는 데 실패했습니다.", error);
    //         }
    //     };
    //     fetchComments();
    // }, []);

    return(
        <div className="commentBox">
            <div>
            {comments.map((comment, index) => (
                <div class="commentList">
                    <div class="commentItem">
                        <div className="profContainer">
                            <Link to={`/${comment.prof}`} className="commProfile">
                                <img className="commProfile" src={comment.prof} alt="프로필" />
                            </Link>
                            <Link to={`/${comment.nick}`} className="nickLink">
                                <p className="commNick">{comment.nick}</p>
                            </Link>
                        </div>
                        <p class="commentText">{comment.comm}</p>
                    </div>
                </div>  
            ))}              

            </div>
        </div>
    )
};
export default Comment;