import Header from "./Header";
import '../css/Main.css';

const Home = () => {

    return (
        <>
            <Header></Header>
            <div > 
                {/* style={{marginInline:'70px'}} */}
            <div className="postList">
                <div className="postBox">
                <img className="postIMG" src="icon/how.jpg"/>
                    <p className="postTitle">게시물1 제목</p>
                    <p className="postNick">게시물1 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how2.jpg"/>
                    <p className="postTitle">게시물2 제목</p>
                    <p className="postNick">게시물2 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how3.jpg"/>
                    <p className="postTitle">게시물3 제목</p>
                    <p className="postNick">게시물3 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how4.jpg"/>
                    <p className="postTitle">게시물4 제목</p>
                    <p className="postNick">게시물4 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how5.jpg"/>
                    <p className="postTitle">게시물5 제목</p>
                    <p className="postNick">게시물5 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how6.jpg"/>
                    <p className="postTitle">게시물6 제목</p>
                    <p className="postNick">게시물6 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how7.jpg"/>
                    <p className="postTitle">게시물7 제목</p>
                    <p className="postNick">게시물7 작성자</p>
                </div>
                <div className="postBox">
                <img className="postIMG" src="icon/how8.jpg"/>
                    <p className="postTitle">게시물8 제목</p>
                    <p className="postNick">게시물8 작성자</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Home;