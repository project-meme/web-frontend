import React from "react";
import styles from "./Home.module.css"
import Img1 from "../../Aseets/temp_w/ex1.jpg"
import Img2 from "../../Aseets/temp_w/ex2.jpg"
import Img3 from "../../Aseets/temp_w/ex3.jpg"
import Img4 from "../../Aseets/temp_w/ex4.jpg"
import { useNavigate } from "react-router-dom";

export default function BestScene(){
    const navigate = useNavigate();

    const dummyList = [
        {txt : "1", img : Img1},
        {txt : "1", img : Img2},
        {txt : "1", img : Img3},
        {txt : "1", img : Img4},
    ]
    return(
        <div>
        <div className={styles.titleContainer}>
            <p className={styles.titleTxt}>명장면 엿보기</p>
            <p className={styles.subTitleTxt}>취향에 딱맞는 웹툰을 찾을 때까지</p>
        </div>
        <div className={styles.bestSceneContainer}>
        {dummyList.map((item, index)=>(
                <div className={styles.centerContaine} onClick={()=> navigate('/kakaoTest')}>
                    <div>
                    <img className={styles.bestSceneImg} src={item.img} alt="장르"/>
                    </div>
                    </div>

            )

        )}
        </div>
        </div>
    )
}