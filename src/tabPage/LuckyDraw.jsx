import React, {useState} from "react";
import styled from 'styled-components';
import { colors } from "../css";
import LuckyDrawContainer from "../Components/LuckyDraw/LuckyDrawContainer";
import LuckyStoreContainer from "../Components/LuckyDraw/LuckyStoreContainer";
import GiftBox from "../Components/LuckyDraw/GiftBox";

const TabMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content : flex-start;
  padding : 10px;
  position : fixed;
  background-color : white;
  width : 100%;
  height : 44px;
  padding : 6px;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    padding: 10px;
    font-family : Pretendard-Medium;
    font-size: 22px;
    transition: 0.5s;
    color : ${colors.color_gray0}
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    color: ${colors.color_black}
  }

  & div.desc {
    text-align: center;
  }
`;

export default function LuckyDraw() {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '뽑기', content: 'Tab menu ONE' },
    { name: '상점', content: 'Tab menu TWO' },
    { name: '선물', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
    <div>
      <TabMenu>
      {menuArr.map((el,index) => (
        <li className={index === currentTab ? "submenu focused" : "submenu" }
        onClick={() => selectMenuHandler(index)}>{el.name}</li>
      ))}
      </TabMenu>
      {currentTab === 0 && (
        <LuckyDrawContainer />
      )}
      {currentTab === 1 && (
        <LuckyStoreContainer />
      )}
      {currentTab === 2 && (
        <GiftBox />
      )}
    </div>
    </>
);
}