import React from "react";

import styles from "../style/Body.css";
import image from "../assets/feed-back.svg";

const Body = () => {
  return (
    // <>
    //   <div>
    //     <img src={image} />
    //   </div>
    // </>

    <div
      style={{
        backgroundImage: `url(${image})`,
        // backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "260px",
      }}
    ></div>
  );
};

export default Body;
