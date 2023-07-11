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
      <div style={{ position: "relative" }}>
        <img style={{ width: "380px", marginTop: "70px" }} src={minhyeok} />
        <div
          style={{
            position: "absolute",
            top: "32%",
            left: "50%",
            transform: "translate( -50%, -50% )",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "0px",
            }}
          >
            MinHyeok
          </h1>
          <h1 style={{ fontSize: "20px", textAlign: "center" }}>
            66,332 members
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section3;
