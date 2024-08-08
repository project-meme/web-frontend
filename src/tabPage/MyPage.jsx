import React from "react";
import backImg from "../Aseets/my_background.png"
import styles from "../MyPage/Mypage.module.css"
import Profile from "../Components/MyPage/Profile";
import backArrow from "../Aseets/header-back-arrow.png"
import { useState } from 'react';
import four_focused from "../Aseets/big_image_black.png"
import four from "../Aseets/big_image.png"
import seven_focused from "../Aseets/calendar_black.png"
import seven from "../Aseets/calendar_gray.png"

export default function MyPage() {

  const data = [
    {
        "date": 1,
        "dayOfWeek": "MONDAY",
        "titleImage": null
    },
    {
        "date": 2,
        "dayOfWeek": "TUESDAY",
        "titleImage": null
    },
    {
        "date": 3,
        "dayOfWeek": "WEDNESDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/5e139655-8bbd-4759-be3b-b7836ee1d361"
    },
    {
        "date": 4,
        "dayOfWeek": "THURSDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/b375676b-6721-40cc-aba6-15d9cf7b8115"
    },
    {
        "date": 5,
        "dayOfWeek": "FRIDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/d7eeed87-f9af-4e00-8c50-b2ab76f5549e"
    },
    {
        "date": 6,
        "dayOfWeek": "SATURDAY",
        "titleImage": null
    },
    {
        "date": 7,
        "dayOfWeek": "SUNDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/dac388ac-4fe9-4cc3-b11b-85818e7f5012"
    },
    {
        "date": 8,
        "dayOfWeek": "MONDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/6a9359e5-f089-4f40-8f98-8c6c487bdd86"
    },
    {
        "date": 9,
        "dayOfWeek": "TUESDAY",
        "titleImage": null
    },
    {
        "date": 10,
        "dayOfWeek": "WEDNESDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/08177985-360a-4cc4-8873-0fd604e48c6b"
    },
    {
        "date": 11,
        "dayOfWeek": "THURSDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/a2069bfc-051d-4ca4-9936-ab09c038a552"
    },
    {
        "date": 12,
        "dayOfWeek": "FRIDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/6dac2225-4235-4f15-9a58-aa116652aa13"
    },
    {
        "date": 13,
        "dayOfWeek": "SATURDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/19f82788-27be-4b12-a7b5-1952cfc3979d"
    },
    {
        "date": 14,
        "dayOfWeek": "SUNDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/e2ca3909-2934-447c-a1fc-2420fbd593e8"
    },
    {
        "date": 15,
        "dayOfWeek": "MONDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/961bdb86-ddbc-499e-89aa-8ab4c86fb62a"
    },
    {
        "date": 16,
        "dayOfWeek": "TUESDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/ca55ec07-75b5-4b73-8064-f4e92d8fb3fd"
    },
    {
        "date": 17,
        "dayOfWeek": "WEDNESDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/415398a7-6636-484b-b26a-c80142b7cfa7"
    },
    {
        "date": 18,
        "dayOfWeek": "THURSDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/95c7d073-d2c6-4c79-b015-d986c9436e48"
    },
    {
        "date": 19,
        "dayOfWeek": "FRIDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/de6661e7-69eb-44b3-aad6-1bbbacb273c4"
    },
    {
        "date": 20,
        "dayOfWeek": "SATURDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/cf16340f-c09f-4ac9-907c-5a12d7edfe9b"
    },
    {
        "date": 21,
        "dayOfWeek": "SUNDAY",
        "titleImage": null
    },
    {
        "date": 22,
        "dayOfWeek": "MONDAY",
        "titleImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/9c26fd42-c5b5-4f8b-9816-e14e1eb25237"
    },
    {
        "date": 23,
        "dayOfWeek": "TUESDAY",
        "titleImage": null
    },
    {
        "date": 24,
        "dayOfWeek": "WEDNESDAY",
        "titleImage": null
    },
    {
        "date": 25,
        "dayOfWeek": "THURSDAY",
        "titleImage": null
    },
    {
        "date": 26,
        "dayOfWeek": "FRIDAY",
        "titleImage": null
    },
    {
        "date": 27,
        "dayOfWeek": "SATURDAY",
        "titleImage": null
    },
    {
        "date": 28,
        "dayOfWeek": "SUNDAY",
        "titleImage": null
    },
    {
        "date": 29,
        "dayOfWeek": "MONDAY",
        "titleImage": null
    },
    {
        "date": 30,
        "dayOfWeek": "TUESDAY",
        "titleImage": null
    },
    {
        "date": 31,
        "dayOfWeek": "WEDNESDAY",
        "titleImage": null
    }
]
const [numColumns, setNumColumns] = useState(4);
  return(
    <div>
      <div style={{backgroundImage :`url(${backImg})`, height : 250, width : "100%", backgroundSize: 'cover',}}>
      </div>
      <Profile />
      <div style={{display :"flex", alignItems :'center', marginLeft : 16, marginRight: 16}}>
        <div className={styles.monthContaienr}>
        <div style={{display : "flex", flexDirection:"row", width : "100%", alignItems :'center', justifyContent : 'space-between'}}>
          <div style={{display : "flex", flexDirection:"row", alignItems :'center', gap:10}}>
            <img src={backArrow} style={{width:20,height:20}} alt=""/>
            <p className={styles.monthTxt}>8월</p>
            <img alt="다음달" src={backArrow} style={{width:20,height:20, rotate:'180deg'}}/>
          </div>
          <div style={{display : "flex", flexDirection:"row", alignItems :'center', marginRight : 10,}}>
          <img alt="4" src={numColumns === 4 ? four_focused : four} style={{width:18,height:18}} onClick={()=>setNumColumns(4)}/>
          <p className={styles.date} style={{marginLeft : 6, marginRight : 6}}>|</p>
          <img alt="7" src={numColumns === 7 ? seven_focused : seven} style={{width:18,height:18}} onClick={()=>setNumColumns(7)}/>
          </div>
        </div>
        </div>
      </div>
      {/*웹툰 로그 박스*/}
      <div style={{marginLeft : 16, marginRight :16}}>
        <div className={styles.webtoonLogContainer}>
          {data.map((item, index)=>(
            <div className={styles.oneWebtoonLogContainer}>
              <p className={styles.date}>{item.date.toString()}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{height: 100}}>

      </div>
    </div>
  );
}