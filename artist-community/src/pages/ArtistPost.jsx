import React from "react";

import artist from '../files/artist_profile.png';
// import tail from '../../files/tail.png';
import post1 from '../files/post1.png';
import check from '../files/check.png';

import '../styles/Box1.css';


function Post(post){
    return(
        <>
        <div className="container">
          <div className="section">
            <div className="profile">
              <img
                style={{ width: "50px", height: "50px" }}
                src={artist}
                alt="Artist Profile"
              />
            </div>
            <div className="text">
              <h4 className="Date">{post.date}</h4>
              <h4 className="Month">{post.month}</h4>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="grayBox">
            <div className="PostBoxText">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  marginBottom: "10px;",
                }}
              >
                <h3>MinHyeok</h3>
                <img
                  style={{ width: "15px", height: "15px", marginLeft: "10px" }}
                  src={check}
                  alt="checkImage"
                />
              </div>
              <div>
                <h5>
                  {post.texts}
                </h5>
              </div>
              <div>
                <h6>{post.time}</h6>
              </div>
            </div>
          </div>
          <div className="PostImage">
            <img
              style={{ width: "665px", marginTop: "11px", marginLeft: "18px" }}
              src={post1}
              alt="드럼민혁"
            />
          </div>
        </div>
      </>
    )
    


}

function ArtistPost(){
    const posts = [
        {
        date: 28,
        month: "June",
        texts: "오늘도 찢었다..! 공연보러와준 아기사자들 고마워용 !! 빠른 시일 내에 보아요!",
        time: "2023. 06. 28. 00:17"
    },
        {
        date: 18,
         month: "May",
         texts: "여러분 오늘 저 드럼 찢었어요 ㅎㅎㅎㅎ",
         },
        {
        date: 8,
        month: "April",
        texts: "제 전완근 보실 분~~",
        },
    ];
    return (
        <div>
          {posts.map((post,index) => (
            <Post post={post} key={index}/>
          ))}
        </div>
      );
    }
    
export default ArtistPost;
