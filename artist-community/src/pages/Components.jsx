import React from 'react';
import artist from '../files/artist_profile.png';
// import tail from '../../files/tail.png';

import check from '../files/check.png';

import '../styles/Box1.css';

const Components = ({date,month,texts,time,image}) => {
  return (
    <div className='container1'>
    <div className="container">
      <div className="section">
        <div className="profile">
          <img style={{ width: '50px', height: '50px' }} src={artist} alt="Artist Profile" />
        </div>
        <div className="text">
          <h4 className="Date">{date}</h4>
          <h4 className="Month">{month}</h4>
        </div>
      </div>
      
    </div>
    <div className="post">
        <div className='grayBox'>
            <div className='PostBoxText'>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: "10px;", marginTop:"-25px"}}>
                    <h3>MinHyeok</h3>
            <img
              style={{ width: "15px", height: "15px", marginLeft: "10px" }}
              src={check} alt="checkImage"
            />
          </div>
          <div style={{marginTop:"-10px"}}>
            <h5 style={{fontSize:"15px", fontWeight:"normal"}}>{texts}</h5>
            </div>
          <div>
            <h6>{time}</h6>
          </div>
        </div>
        </div>
        <div className="PostImage">
            <img style={{ width: "665px", marginTop: "11px",marginLeft:"18px" }} src={image} alt="드럼민혁"/>


        </div>
    </div>
    </div>
  );
};

export default Components;