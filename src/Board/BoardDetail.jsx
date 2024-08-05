import React from "react";
import { useParams } from "react-router-dom";
import TitleHeader from "../Components/Layout/Header/TitleHeader";
import styles from "./Board.module.css"
import { colors } from "../css";
import { elapsedTime } from "../utils/TimeConverter";
import LikeCommentScrapContainer from "../Components/Board/LikeCommentScrapContainer";
import { useLocation } from 'react-router-dom';

export default function BoardDetail(){

    const {id} = useParams();
    console.log(id);

    const location = useLocation();

    const data = location.state;
    console.log(data.data.txt, "data");


    const dummyList = [
        {
            "postId": 204,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-08-02T10:41:15",
            "title": null,
            "content": "Sdfsdddddddddddddddddddddㅇ눠리위눠ㅣㄹ눠ㅣㅇ눙나앙ㅇㅇㅇㅇㅇㅇㅇ",
            "imageList": [],
            "imageRatio": null,
            "postTags": [
                "#솔직한_웹툰리뷰"
            ],
            "taggedCharInfo": [],
            "postProducts": [],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        },
        {
            "postId": 203,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-08-02T10:37:12",
            "title": null,
            "content": "ㅇㅇㅇㅇ",
            "imageList": [],
            "imageRatio": null,
            "postTags": [
                "hashtag"
            ],
            "taggedCharInfo": [],
            "postProducts": [],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        },
        {
            "postId": 185,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-07-31T17:57:49",
            "title": null,
            "content": "글 내용",
            "imageList": [
                "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/f741601c-93c2-408d-8c13-8d92cdcc9118"
            ],
            "imageRatio": "1",
            "postTags": [],
            "taggedCharInfo": [],
            "postProducts": [],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        },
        {
            "postId": 184,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-07-31T17:57:47",
            "title": null,
            "content": "글 내용",
            "imageList": [
                "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/f741601c-93c2-408d-8c13-8d92cdcc9118"
            ],
            "imageRatio": "1",
            "postTags": [],
            "taggedCharInfo": [],
            "postProducts": [],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        },
        {
            "postId": 183,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-07-31T17:57:45",
            "title": null,
            "content": "글 내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            "imageList": [
                "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/f741601c-93c2-408d-8c13-8d92cdcc9118"
            ],
            "imageRatio": "1",
            "postTags": [],
            "taggedCharInfo": [],
            "postProducts": [],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        },
        {
            "postId": 182,
            "characterId": null,
            "author": "김웹툰",
            "authorEmail": "gyrudskrud@naver.com",
            "authorProfileImage": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/934a023d-813b-45aa-8e4c-435118780094",
            "createdAt": "2024-07-31T17:53:41",
            "title": null,
            "content": "글 내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            "imageList": [],
            "imageRatio": null,
            "postTags": [],
            "taggedCharInfo": [],
            "postProducts": [
                {
                    "webtoonTitle": "시나브로",
                    "productId": 141,
                    "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/9e7154f9-fa66-4daf-b74c-38fea5b7a272-%E1%84%80%E1%85%AE%E1%86%BA%E1%84%8C%E1%85%B3%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg",
                    "title": "[시나브로] 현성 포토카드",
                    "price": 5000,
                    "discountRate": 0,
                    "liked": true,
                    "isSoldOut": false
                },
                {
                    "webtoonTitle": "코드네임",
                    "productId": 144,
                    "thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/80d8a790-1a86-43e7-88b7-355ccc053c23-%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B54.png",
                    "title": "[코드네임] 바다 포토카드",
                    "price": 5000,
                    "discountRate": 0,
                    "liked": true,
                    "isSoldOut": false
                }
            ],
            "commentCnt": 0,
            "likedCnt": 0,
            "scrappedCnt": 0,
            "ifLike": false,
            "ifScrap": false,
            "isLikedByCurrentUser": null
        }
    ]

    return(
        <div>
            <TitleHeader title={data.data.txt}/>
            
            <div style={{padding : 10}}>
                <div className={styles.gridContainer}>
                {dummyList.map((item, index)=>(
                <div className={styles.contentContainer}>
                    <div style={{display : "flex", flexDirection : 'row', width : "100%",}}>
                    <div style={{display : "flex", flexDirection : "column", alignItems : 'flex-start'}}>
                    <p className={styles.title}>{item.content}</p>
                    <p className={styles.content}>{item.content}</p>
                    <div style={{display :"flex", flexDirection : "row", fontSize : 15, color : colors.color_gray1, alignItems : 'center'}}>
                    <LikeCommentScrapContainer data={item}/>
                    <p className={styles.infoTxt}>{elapsedTime(item.createdAt)}</p>
                    <p className={styles.infoTxt}>|</p>
                    <p className={styles.infoTxt}>{item.author}</p>
                    </div>
                    </div>
                    </div>
                    <div>
                        {item.imageList.length > 0 && (
                        <img src={item.imageList} alt="이미지" style={{alignSelf : "flex-end",width : 100, height : 100, borderRadius : 12,}}referrerPolicy="no-referrer"/> )}
                        </div>
                    </div>

            )

        )}
        </div>
            </div>

        </div>
    )
}