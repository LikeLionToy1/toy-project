import React, { useState } from "react";

import Artistfeed from "./Artistfeed";

import styles from "../style/Section1.css";
import image from "../assets/feed-back.svg";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import check from "../assets/check.png";
import artist from "../assets/artist_profile.png";

const Section1 = () => {
  const users = [
    {
      id: 1,
      text: "멋사 파이팅1",
    },
    {
      id: 2,
      text: "멋사 파이팅2",
    },
    {
      id: 3,
      text: "멋사 파이팅3",
    },
    {
      id: 4,
      text: "멋사 파이팅4",
    },
    {
      id: 5,
      text: "멋사 파이팅5",
    },
  ];

  // start = 0으로 설정, index는 0부터
  // start = 0, 123 / start = 3, 456
  const [start, setNumber] = useState(0);
  const selectedUsers = users.slice(start, start + 3);

  const plusNum = (e) => {
    if (start != 3) {
      setNumber((preNum) => preNum + 3);
    } else if (start == 3) {
      alert("마지막 페이지입니다.");
    }
  };
  const minusNum = (e) => {
    if (start != 0) {
      setNumber((preNum) => preNum - 3);
    } else if (start == 0) {
      alert("첫 번째 페이지입니다.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "260px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img style={{ marginRight: "30px" }} src={left} onClick={minusNum} />
      </div>

      {/* {users.map((item) => {
        return <Artistfeed user={item.text} />;
      })} */}

      {selectedUsers.map((user) => (
        <Artistfeed user={user.text} />
      ))}

      <div>
        <img style={{ marginLeft: "30px" }} src={right} onClick={plusNum} />
      </div>
    </div>
  );
};

export default Section1;
