import React from "react";
import styles from "./LuckyDrawContaier.module.css"
import gift5 from "../../Aseets/LuckyDraw/gift_5.png"
import kakao5 from "../../Aseets/LuckyDraw/kakao_5.png"
import happy5 from "../../Aseets/LuckyDraw/happy_5.png"
import naver5 from "../../Aseets/LuckyDraw/naver_1m.png"

export default function LuckyDrawContainer(){
    const data = [
        {id : 0, img : gift5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 1, img : kakao5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 2, img : happy5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
        {id : 3, img : naver5, title : "문화상품권", subTitle : "문화상품권 5만원권"},
    ]
    return(
        <div>
            <div className={styles.mainbanner} style={{paddingTop :56}}>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>꽝 없는 100% 당첨 럭키드로우</p>
                <p className={styles.infoSubTitle}>럭키드로우 참여하고 웹툰 무료로 더 보자!</p>
            </div>
            <div style={{marginLeft : 16, marginRight : 16}}>
                <div className={styles.itemGridContainer}>
                {data.map((item, index)=> (
                    <div className={styles.bigItemContainer}>
                        <img src={item.img} className={styles.bigItemImg} alt=""/>
                        <p className={styles.itemTitle}>{item.title}</p>
                        <p className={styles.itemSubTitle}>{item.subTitle}</p>
                    </div>
                ))}
                </div>
                <div className={styles.itemSmallGridContainer}>
                {data.map((item, index)=> (
                    <div className={styles.smallItemContainer}>
                        <img src={item.img} className={styles.smallItemImg} style={{marginLeft : 20,}} alt=""/>
                        <div style={{display :"flex", flexDirection : 'column', alignItems :'flex-start', marginLeft : 20,}}>
                        <p className={styles.itemTitle} style={{marginTop : 0}}>{item.title}</p>
                        <p className={styles.itemSubTitle}>{item.subTitle}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}