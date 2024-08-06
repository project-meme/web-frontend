import React from "react";
import comment from "../../Aseets/com.png";
import thumbs from "../../Aseets/thumbs_black.png";
import scrap from "../../Aseets/star_black.png";
import styles from "../../Board/Board.module.css"


export default function LikeCommentScrapContainer({data}){
    console.log(data);
    return(
        <div style={{display : "flex", padding : 0,flexDirection : 'row', alignItems : 'center', gap : 4}}>
            <img src={thumbs} className={styles.icon} alt="댓글"/>
            <p className={styles.infoTxt}>{data.likedCnt}</p>
            <img src={comment} className={styles.icon} alt="댓글"/>
            <p className={styles.infoTxt}>{data.commentCnt}</p>
            <img src={scrap} className={styles.icon} alt="댓글"/>
            <p className={styles.infoTxt}>{data.scrappedCnt}</p>
            <p className={styles.infoTxt}>|</p>

        </div>
    )
}


