import React from "react";

import user_profile from "../assets/user_profile.png";
import camera from "../assets/input_camera.png";
import tray from "../assets/input_tray.png";
import heart from "../assets/heart-removebg-preview.png";
import comment from "../assets/comment-removebg-preview.png";

const Section2 = () => {
  return (
    <div className="inner">
      <input type="text" placeholder="LIKELION에 포스트를 남겨보세요." />
      <div className="user_profile">
        <img
          src={user_profile}
          width={"38px"}
          style={{ marginLeft: "130px" }}
        />
      </div>
      <div className="camera_tray">
        <img src={camera} width={"30px"} />
        <img src={tray} width={"30px"} style={{ marginLeft: "10px" }} />
      </div>

      <div className="user_box">
        <div className="user_box2">
          <img src={user_profile} width={"38px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>윤지수</p>
            <p
              style={{
                marginTop: "0px",
                fontSize: "10px",
                color: "grey",
                marginBottom: "0px",
              }}
            >
              07.10 14:34
            </p>
          </div>
        </div>
        <div>
          <p>프론트 대장 김민혁 최고~~~</p>
        </div>
        <div className="heart_comment">
          <img src={heart} width={"30px"} style={{ marginRight: "5px" }} />
          <img src={comment} width={"30px"} />
        </div>
      </div>

      <div className="user_box">
        <div className="user_box2">
          <img src={user_profile} width={"38px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>윤지수2</p>
            <p
              style={{
                marginTop: "0px",
                fontSize: "10px",
                color: "grey",
                marginBottom: "0px",
              }}
            >
              07.10 14:34
            </p>
          </div>
        </div>
        <div>
          <p>프론트 대장 김민혁 최고~~~</p>
        </div>
        <div className="heart_comment">
          <img src={heart} width={"30px"} style={{ marginRight: "5px" }} />
          <img src={comment} width={"30px"} />
        </div>
      </div>

      <div className="user_box">
        <div className="user_box2">
          <img src={user_profile} width={"38px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>윤지수3</p>
            <p
              style={{
                marginTop: "0px",
                fontSize: "10px",
                color: "grey",
                marginBottom: "0px",
              }}
            >
              07.10 14:34
            </p>
          </div>
        </div>
        <div>
          <p>프론트 대장 김민혁 최고~~~</p>
        </div>
        <div className="heart_comment">
          <img src={heart} width={"30px"} style={{ marginRight: "5px" }} />
          <img src={comment} width={"30px"} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
