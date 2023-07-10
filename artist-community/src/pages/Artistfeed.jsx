import React from "react";

import styles from "../style/Section1.css";
import check from "../assets/check.png";
import artist from "../assets/artist_profile.png";

function Artistfeed({ user }) {
  return (
    <div className="box">
      <div className="profile">
        <img style={{ width: "43px", height: "43px" }} src={artist} />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h3>MinHyeok</h3>
          <img
            style={{ width: "15px", height: "15px", marginLeft: "10px" }}
            src={check}
          />
        </div>
        <div>
          <h4 style={{ marginTop: "0px" }}>{user}</h4>
        </div>
      </div>
    </div>
  );
}

export default Artistfeed;
