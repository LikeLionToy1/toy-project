import React from "react";

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
      text: "멋사 파이팅",
    },
    {
      id: 2,
      text: "멋사 파이팅팅",
    },
    {
      id: 3,
      text: "멋사 파이팅팅팅",
    },
  ];

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
        <img style={{ marginRight: "30px" }} src={left} />
      </div>

      {users.map((item) => {
        return <Artistfeed user={item.text} />;
      })}

      <div>
        <img style={{ marginLeft: "30px" }} src={right} />
      </div>
    </div>
  );
};

export default Section1;
