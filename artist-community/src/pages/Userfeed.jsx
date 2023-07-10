import React from "react";

import user_profile from "../assets/user_profile.png";
import heart from "../assets/heart-removebg-preview.png";
import comment from "../assets/comment-removebg-preview.png";

function User({ user }) {
  return (
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
          <p style={{ marginTop: "0px", marginBottom: "0px" }}>
            {user.username}
          </p>
          <p
            style={{
              marginTop: "0px",
              fontSize: "10px",
              color: "grey",
              marginBottom: "0px",
            }}
          >
            {user.time}
          </p>
        </div>
      </div>
      <div>
        <p>{user.text}</p>
      </div>
      <div className="heart_comment" style={{ marginBottom: "5px" }}>
        <img src={heart} width={"30px"} style={{ marginRight: "5px" }} />
        <img src={comment} width={"30px"} />
      </div>
    </div>
  );
}

function Userfeed() {
  const users = [
    {
      id: 1,
      username: "윤지수3",
      time: "07.10 14:34",
      text: "프론트 대장 김민혁 최고~~~",
    },
    {
      id: 2,
      username: "윤지수2",
      time: "07.10 13:34",
      text: "프론트 대장 김민혁 최고~~",
    },
    {
      id: 3,
      username: "윤지수1",
      time: "07.10 12:34",
      text: "프론트 대장 김민혁 최고~",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default Userfeed;
