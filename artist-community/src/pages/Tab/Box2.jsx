import React from "react";

import letter from "../../files/letter.png";
import userprofile from "../../files/userprofile.svg";
import notice from "../../files/notice.svg";
import right from "../../files//Icons/right.svg";

const Box2 = () => {
  return (
    <div className="box2">
      <div style={{ 
            backgroundColor: "#F7F7FA", 
            borderRadius: '15px',
            width: '380px',
            height: '155px',
            display: 'inline-block',
            marginTop: "45px"
          }}>
            <div
          style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <img
          style={{ width: "28px", height: "28px", marginRight: "10px" }}
          src={letter} alt="small letter"
        />
        <h3 style={{ paddingTop: "3px"}}>팬레터</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="box3" 
        style={{width:"300px", 
        display:'flex', 
        justifyContent: "space-between",
        border:'1px solid', 
        borderColor: '#D1D1D3',
         borderRadius: '5px',
         paddingLeft:"15px",
         paddingRight: "15px",
         }}>
          <h5>To MinHyeok</h5>
          <h5>&gt;</h5>
        </div>
      </div>
    </div>
      
      <div style={{ position: "relative"}}>
        <div style={{ 
            backgroundColor: "#F7F7FA", 
            borderRadius: '15px',
            width: '380px',
            height: '250px',
            display: 'inline-block',
            marginTop: "11px"
          }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate( -50%, -50% )",
            color: "Black",
          }}
        >
          <img style={{ width: "73px" }} src={userprofile} alt="User Profile Image"/>
          <h1
            style={{
              fontSize: "28px",
              textAlign: "center",
              marginBottom: "0px",
            }}
          >
            김혜원
          </h1>
          <h1 style={{ fontSize: "15px", textAlign: "center" }}>
            0 팔로워
          </h1>
        </div>
        </div>
      </div>

      <div style={{ position: "relative"}}>
        <div style={{ 
            backgroundColor: "#F7F7FA", 
            borderRadius: '15px',
            width: '380px',
            height: '155px',
            display: 'inline-block',
            marginTop: "11px"
          }}>
        <div
          style={{
            display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "10px",
          width:"340px",
          marginLeft:"25px",
          }}
        >
          <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            <img
          style={{ width: "28px", height: "28px", marginRight: "10px" }}
          src={notice} alt="notice"
        />
        <h3 style={{ paddingTop: "3px"}}>공지사항</h3>
          </div>
          
        <div style={{display: "flex"}}>
          <img src={right} alt="right"/>
        </div>
        </div>
        <div>
        <h1 style={{ fontSize: "15px", textAlign: "left",marginLeft:"30px",fontWeight:"normal" }}>
          [NOTICE] 김민혁 LIKELION 오픈 기념 이벤트 ...
          </h1>
        </div>
        <div>
        <h1 style={{ fontSize: "15px", textAlign: "left",marginLeft:"30px",fontWeight:"normal" }}>
          [NOTICE] 김민혁 LIKELION 오픈 기념 이벤트 ...
          </h1>
        </div>
        </div>
        
      </div>


    </div>
  );
};

export default Box2;