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

export default function BottomNav(){
  const [currentTab, clickTab] = useState(0);

  return (
   <nav className={styles.container}>
      <NavLink to="/" className={styles.navLink} onClick={()=>{clickTab(0)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab === 0 ? home_focuced : home} alt="home"/>
      <p className={styles.focusedTxt}>홈</p>
      </div>
      </NavLink>
      <NavLink to="/second" className={styles.navLink} onClick={()=>{clickTab(1)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab === 1 ? board_focused : board} alt="my"/>
      <p className={styles.focusedTxt}>게시판</p>
      </div>
      </NavLink>
      <NavLink to="/third" className={styles.navLink} onClick={()=>{clickTab(2)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab === 2 ? best_focused : best} alt="my"/>
      <p className={styles.focusedTxt}>명장면</p>
      </div>
      </NavLink>
      <NavLink to="/fourth" className={styles.navLink} onClick={()=>{clickTab(3)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab === 3 ? board_focused : board} alt="my"/>
      <p className={styles.focusedTxt}>뽑기</p>
      </div>
      </NavLink>
      <NavLink to="/mypage" className={styles.navLink} onClick={()=>{clickTab(4)}}>
      <div className={styles.columnContainer}>
      <img className={styles.icon} src={currentTab === 4 ? my_focused : my} alt="my"/>
      <p className={styles.focusedTxt}>홈</p>
      </div>
      </NavLink>
    </nav>
  );
};