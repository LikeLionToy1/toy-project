import React from "react";

import styles from "../style/Body.css";
import image from "../assets/feed-back.svg";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import check from "../assets/check.png";
import artist from "../assets/artist_profile.png";

const Body = () => {
  return (
    // 이미지 넣기
    // <>
    //   <div>
    //     <img src={image} />
    //   </div>
    // </>

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

      <div className="box">
        <div className="profile">
          <img style={{ width: "43px", height: "43px" }} src={artist} />
        </div>
        <h3>MinHyeok</h3>
        <img
          style={{ width: "15px", height: "15px", marginLeft: "10px" }}
          src={check}
        />
      </div>

      <div className="box">
        <div className="profile">
          <img style={{ width: "43px", height: "43px" }} src={artist} />
        </div>
        <h3>MinHyeok</h3>
        <img
          style={{ width: "15px", height: "15px", marginLeft: "10px" }}
          src={check}
        />
      </div>

      <div className="box">
        <div className="profile">
          <img style={{ width: "43px", height: "43px" }} src={artist} />
        </div>
        <h3>MinHyeok</h3>
        <img
          style={{ width: "15px", height: "15px", marginLeft: "10px" }}
          src={check}
        />
      </div>

      <div>
        <img style={{ marginLeft: "30px" }} src={right} />
      </div>
    </div>
  );
};

export default Body;
