import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import NavTab from "./NavTab";

import Artist from "./Tab/Artist";

import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "../style/Feed.css";

function FeedContent() {
  return (
    <>
      <Section1 />
      <div className="container">
        <Section2 className="section" />
        <Section3 className="section" />
      </div>
    </>
  );
}

function Feed() {
  return (
    <>
      <Header></Header>
      <NavTab />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<FeedContent />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}


export default Feed;
