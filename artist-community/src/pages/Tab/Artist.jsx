import React from "react";
import "../../styles/ArtistCss.css"
import post1 from '../../files/post1.png';
import post2 from '../../files/post2.png';
import post3 from '../../files/post3.png';
import post4 from '../../files/post4.png';

// import Box1 from "./Box1";
import Box2 from "./Box2";

import Components from "../Components";



function Artist() {
  const contents = [
    {
      date: 28,
      month: "June",
      texts: "오늘도 찢었다..! 공연보러와준 아기사자들 고마워용!! 빠른 시일 내에 보아요!",
      time: "2023. 06. 28. 00:17",
      image: post1,
      // image: '../../files/post1.png',
      

    },
      {
      date: 18,
       month: "May",
       texts: "여러분 오늘 저 어디왔게요ㅎㅎㅎㅎ",
       time: "2023. 05. 18. 00:17",      
       image: post2,
      //  image: '../../files/post2.png',
       },
      {
      date: 8,
      month: "April",
      texts: "제 전완근 보실 분~~",
      time: "2023. 04. 08. 00:17",
      image: post3,
      // image: '../../files/post3.png',
      },
      {
        date: 5,
        month: "Feb",
        texts: "~~~김민혁 다녀가다~~~",
        time: "2023. 02. 05. 00:17",
        image: post4,
        // image: '../../files/post4.png',
        },
  ]

  
  return (
    <>
    <div className="Bigcontainer">
        {/* <Box1 classname = 'Box'></Box1> */}
        <div>
        {
          contents.map((item)=>{
            const test = item.date
            console.log(test)
            return (
              <Components date={item.date} month={item.month} texts={item.texts} time={item.time} image={item.image}></Components>
            )
          })
        }
        </div>
        
        <Box2 classname = 'Box'></Box2>
    </div>
    
    </>
  );
}

export default Artist;



const dates = new Date()
  // console.log(dates)
  const year = dates.getFullYear();
  const month = dates.getMonth();
  const date = dates.getDate();
  const day = dates.getDay();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();
  
  console.log(`현재 날짜는 ${year}년 ${month + 1}월 ${date}일입니다.`);
  console.log(`현재 시간은 ${hours}시 ${minutes}분 ${seconds}초입니다.`);
  