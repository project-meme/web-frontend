import React from "react";
import styles from "./BottomNav.module.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import home from "./Aseets/home.png";
import home_focuced from "./Aseets/home_focused.png";
import my from "./Aseets/my.png";
import my_focused from "./Aseets/my_focused.png";
import board from "./Aseets/board.png"
import board_focused from "./Aseets/board_focused.png"
import best from "./Aseets/best.png";
import best_focused from "./Aseets/best_focused.png"

export default function BottomNav(){
  const [currentTab, clickTab] = useState(0);

  const selectTabHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
   <nav className={styles.container}>
      <NavLink to="/" className={styles.navLink} onClick={()=>{clickTab(0)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab == 0 ? home_focuced : home} alt="home"/>
      <a className={styles.focusedTxt}>홈</a>
      </div>
      </NavLink>
      <NavLink to="/second" className={styles.navLink} onClick={()=>{clickTab(1)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab == 2 ? board_focused : board} alt="my"/>
      <a className={styles.focusedTxt}>게시판</a>
      </div>
      </NavLink>
      <NavLink to="/third" className={styles.navLink} onClick={()=>{clickTab(2)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab == 2 ? best_focused : best} alt="my"/>
      <a className={styles.focusedTxt}>명장면</a>
      </div>
      </NavLink>
      <NavLink to="/fourth" className={styles.navLink} onClick={()=>{clickTab(3)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab == 3 ? board_focused : board} alt="my"/>
      <a className={styles.focusedTxt}>뽑기</a>
      </div>
      </NavLink>
      <NavLink to="/fifth" className={styles.navLink} onClick={()=>{clickTab(4)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab == 4 ? my_focused : my} alt="my"/>
      <a className={styles.focusedTxt}>홈</a>
      </div>
      </NavLink>
    </nav>
  );
};