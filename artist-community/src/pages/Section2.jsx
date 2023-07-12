import React from "react";
import Userfeed from "./Userfeed";

import user_profile from "../assets/user_profile.png";
import camera from "../assets/input_camera.png";
import tray from "../assets/input_tray.png";

const Section2 = () => {
  const handleOnClick = () => {
    alert("handleOnClick() 잘 실행되고 있어염");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="inner">
      <input
        type="text"
        placeholder="LIKELION에 포스트를 남겨보세요."
        onKeyDown={handleOnKeyPress}
      />
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

      <Userfeed></Userfeed>
    </div>
  );
};

export default Section2;
