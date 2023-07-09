import React from "react";

import letter from "../assets/letter.png";
import minhyeok from "../assets/artist_big_profile.png";

const Section3 = () => {
  return (
    <div className="box2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "12px",
        }}
      >
        <img
          style={{ width: "28px", height: "28px", marginRight: "10px" }}
          src={letter}
        />
        <h3 style={{ paddingTop: "3px" }}>팬레터</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="box3">
          <h5>To MinHyeok</h5>
          <h5>&gt;</h5>
        </div>
      </div>
      <div>
        <img style={{ width: "380px", marginTop: "70px" }} src={minhyeok} />
      </div>
    </div>
  );
};

export default Section3;
