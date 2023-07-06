import React from "react";
import { Row, Col } from "reactstrap";

import styles from "../style/Footer.css";

const Footer = () => {
  return (
    <>
      <div class="main-footer">
        <p>
          Terms of use &nbsp;&nbsp;|&nbsp;&nbsp; Service operation policy
          &nbsp;&nbsp;|&nbsp;&nbsp; Premium service terms of use
          &nbsp;&nbsp;|&nbsp;&nbsp; Privacy policy &nbsp;&nbsp;|&nbsp;&nbsp;
          Cookie policy &nbsp;&nbsp;|&nbsp;&nbsp; Cookie Settings
        </p>
        <p style={{ color: "gray" }}>
          © LIKELION COMPANY Inc. &nbsp;&nbsp; Ver 2.9.6
        </p>
      </div>
    </>
  );
};

export default Footer;
