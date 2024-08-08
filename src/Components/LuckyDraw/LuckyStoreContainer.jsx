import React from "react";
import styles from "./LuckyDrawContaier.module.css"
import gift5 from "../../Aseets/LuckyDraw/gift_5.png"
import kakao5 from "../../Aseets/LuckyDraw/kakao_5.png"
import happy5 from "../../Aseets/LuckyDraw/happy_5.png"
import naver5 from "../../Aseets/LuckyDraw/naver_1m.png"
import coin from "../../Aseets/fragment.png"

export default function LuckyStoreContainer(){
    const data = [
        {id : 0, img : gift5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 1, img : kakao5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 2, img : happy5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 3, img : naver5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
    ]
    return(
        <div>
            <div className={styles.infoContainer}>
                <p className={styles.infoTitle} style={{marginTop : 56}}>행성상점</p>
                <p className={styles.infoSubTitle}>행성코인으로 웹툰 더 보자!</p>
            </div>
            <div style={{marginLeft : 16, marginRight : 16}}>
            <div className={styles.itemGridContainer}>
                {data.map((item, index)=> (
                    <>
                    <div style={{display :'flex', flexDirection:'column'}}>
                    <div className={styles.bigItemContainer} style={{height : 190}}>
                        <img src={item.img} className={styles.bigItemImg} alt=""/>
                    </div>
                    <p className={styles.itemTitle} style={{marginTop :20}}>{item.title}</p>
                    <p className={styles.itemSubTitle}>{item.subTitle}</p>
                    <div style={{display : 'flex', flexDirection :'row', justifyContent : 'center', alignItems : 'center', marginTop : 10, marginBottom : 30}}>
                        <img src={coin} style={{width : 18, height : 20, objectFit : 'contain'}} alt=""/>
                    <p className={styles.itemSubTitle}>5,000</p>
                    </div>
                    </div>
                    </>
                ))}
                </div>
            </div>

        </div>
    )
}