import React from "react";
import { Row, Col } from "reactstrap";

import styles from "../style/Body.css";
import image from "../assets/feed-back.svg";

const Body = () => {
  return (
    <>
      <div>
        <img src={image} />
      </div>
    </>
  );
};

export default Body;
