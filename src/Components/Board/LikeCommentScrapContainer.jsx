import React from "react";
import comment from "../../Aseets/com.png";
import thumbs from "../../Aseets/thumbs_black.png";
import scrap from "../../Aseets/star_black.png";


export default function LikeCommentScrapContainer({data}){
    console.log(data);
    return(
        <div style={{display : "flex", overflow: "hidden", flexDirection : 'row', alignItems : 'center', gap : 4}}>
            <img src={thumbs} style={{width : 13, height : 13, opacity : 0.5}} alt="댓글"/>
            <a>{data.likedCnt}</a>
            <img src={comment} style={{width : 13, height : 13, opacity : 0.5}} alt="댓글"/>
            <a>{data.commentCnt}</a>
            <img src={scrap} style={{width : 13, height : 13, opacity : 0.5}} alt="댓글"/>
            <a>{data.scrappedCnt}</a>
            <a>|</a>

        </div>
    )
}


