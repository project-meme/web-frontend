import React from "react";
import styles from "./LuckyDrawContaier.module.css"
import gift5 from "../../Aseets/LuckyDraw/gift_5.png"
import kakao5 from "../../Aseets/LuckyDraw/kakao_5.png"
import happy5 from "../../Aseets/LuckyDraw/happy_5.png"
import naver5 from "../../Aseets/LuckyDraw/naver_1m.png"

export default function GiftBox(){
    const data = [
        {id : 0, img : gift5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 1, img : kakao5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 2, img : happy5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 3, img : naver5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
    ]
    return(
        <div className={styles.itemSmallGridContainer} style={{paddingTop : 66, paddingLeft : 16, paddingRight : 16, gap : 12}}>
        {data.map((item, index)=> (
            <div className={styles.smallItemContainer} style={{paddingTop : 4,paddingBottom : 4}}>
                <img src={item.img} className={styles.smallItemImg} style={{marginLeft : 20,}} alt=""/>
                <div style={{display :"flex", flexDirection : 'column', alignItems :'flex-start', marginLeft : 20}}>
                <p className={styles.itemTitle} style={{marginTop : 0}}>{item.title}</p>
                <p className={styles.itemSubTitle}>{item.subTitle}</p>
                <p className={styles.itemTitle} style={{marginTop : 2}}>1234-1234-1234</p>
                </div>
            </div>
        ))}
        </div>
    )
}