import React from "react";
import TitleHeader from "../Components/Layout/Header/TitleHeader";
import styles from "../Board/BoardMain.module.css"
import tack_focused from "../Aseets/tack_full.png"
import tack from "../Aseets/tack_unfill_right.png"

export default function Board() {

  const data = [
    {
        "genreName": "로맨스",
        "subtitleName": "로맨스 장르 게시판입니다.",
        "isLiked": true,
        "genreId": 1
    },
    {
        "genreName": "스릴러",
        "subtitleName": "스릴러 장르 게시판입니다..",
        "isLiked": true,
        "genreId": 2
    },
    {
        "genreName": "로판",
        "subtitleName": "로판게시판!",
        "isLiked": true,
        "genreId": 4
    },
    {
        "genreName": "스포츠",
        "subtitleName": "스포츠게시판",
        "isLiked": true,
        "genreId": 5
    },
    {
        "genreName": "BL",
        "subtitleName": "BL게시판",
        "isLiked": true,
        "genreId": 8
    },
    {
        "genreName": "일상/개그",
        "subtitleName": "일상/개그",
        "isLiked": true,
        "genreId": 9
    }
]

const webtoonData = [
  {
      "id": 1,
      "title": "시나브로",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/341f05be-5454-405a-8898-adc5ec4a0d21-IMG_9854.jpg",
      "isForAdult": false
  },
  {
      "id": 2,
      "title": "코드네임",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/0ab1a320-05c2-4f38-a486-fefd62203f63",
      "isForAdult": false
  },
  {
      "id": 6,
      "title": "공유하는집",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/12fb0a7e-4921-4e4b-9b28-30bc34308b7f",
      "isForAdult": false
  },
  {
      "id": 7,
      "title": "벗지말아주세요",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/287c8daa-639e-4631-9d59-33234ed29154",
      "isForAdult": false
  },
  {
      "id": 8,
      "title": "후배손은약손",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/db2b87ed-3886-40e6-ab35-257557e10909",
      "isForAdult": false
  },
  {
      "id": 9,
      "title": "고쓰리형사",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/11f47cd5-ea8d-40f7-bf56-21092ad4401b",
      "isForAdult": false
  },
  {
      "id": 10,
      "title": "한국대학교",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/102ba109-1ba9-4092-810e-dae90bf5a52e-name",
      "isForAdult": false
  },
  {
      "id": 11,
      "title": "이세계",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/fda60b1b-3d90-4b7b-b38d-6ca973d8776c",
      "isForAdult": false
  },
  {
      "id": 12,
      "title": "화산귀환",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/2fe82397-ee48-41c5-a549-631f1fa2cdfe",
      "isForAdult": false
  },
  {
      "id": 13,
      "title": "전지적 독자시점",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/0ab3dfab-45cb-40b8-b6cf-d1ebfd594478",
      "isForAdult": false
  },
  {
      "id": 14,
      "title": "시월드가 내게 집착한다",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/bae3a479-dfdb-4d9a-904a-60327ae3ef92",
      "isForAdult": false
  },
  {
      "id": 15,
      "title": "백XX",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/b5d8e80b-711a-4ce4-ab10-612288c36fe3",
      "isForAdult": false
  },
  {
      "id": 16,
      "title": "12시네 점심",
      "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/6b94ae3f-faaf-4492-a45f-53d7f2782a35",
      "isForAdult": false
  }
]

  return(
    <div>
    <TitleHeader title={"팬페이지"}/>
    <div style={{marginTop : 20,}}>
      {data.map((item, index)=>(
        <div style={{display: "flex", flexDirection:'row', marginLeft : 16, marginRight : 16, paddingTop : 10, paddingBottom : 10}}>
          <img src={item.isLiked ? tack_focused : tack} style={{width : 17, height: 17, marginLeft : 16, marginRight : 16}} alt=""/>
          <div style={{display: "flex", alignItems:'flex-start', flexDirection : 'column'}}>
          <p className={styles.genreTxt}>{item.genreName}</p>
          <p className={styles.subtitleName}>{item.subtitleName}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.webtoonImageGridContainer}>
      {webtoonData.map((item, index)=>(
        <div>
          <img className={styles.webtoonImg} src={item.thumbnail} alt=""/>
        </div>
      ))}
    </div>
    </div>
  );
}