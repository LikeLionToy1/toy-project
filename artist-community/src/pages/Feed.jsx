import React from "react";

import App from "../App";
import Header from "./Header";
import Navigator from "./Navigator";

import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "../style/Feed.css";

function Feed() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Navigator></Navigator> */}
      <Section1></Section1>
      <div className="container">
        <Section2 className="section"></Section2>
        <Section3 className="section"></Section3>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Feed;
