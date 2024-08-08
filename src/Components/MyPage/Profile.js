import React from "react";
import profile from "../../Aseets/c5.jpg"
import styles from "../../MyPage/Mypage.module.css"

export default function Profile(){
    return(
      <div style={{marginTop : -40, width : "100%", backgroundColor : "white", borderTopLeftRadius : 20, borderTopRightRadius : 22,}}>
        <div style={{display : "flex", flexDirection : 'row', width : "100%", position : 'relative', top : -50}}>
          <img src={profile} style={{width : 120, borderRadius : 100, marginLeft : 16}} alt=""/>
          <div style={{display: "flex", flexDirection:'column', width : "100%", marginRight : 16}}>
            <div style={{display:"flex", flexDirection : "row", width : "100%", }}>
              <div style={{display : "flex", flexDirection : 'row', position : 'relative', top : 60, justifyContent : "space-between", width : "100%" }}>
                <div style={{marginLeft : 10}}>
                <p className={styles.nickname}>김웹툰</p>
                </div>
                <div className={styles.editContainer}>
                <p className={styles.editTxt}>프로필 수정</p>
                </div>
              </div>
            </div>
            <div style={{display :"flex", alignItems : 'flex-start', position:'relative', top : 60, marginLeft : 10}}>
              <p className={styles.info}>웹툰저장소 0작품</p>
            </div>
          </div>
        </div>
      </div>
    )
}