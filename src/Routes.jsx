import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LuckyDraw from "./tabPage/LuckyDraw";
// import Shorts from "./tabPage/Shorts";
// import Board from "./tabPage/Board"
// import Home from "./tabPage/Home"
// import BottomNav from "./BottomNav"
// import BoardDetail from "./Board/BoardDetail";
import BaordPost from "./Board/BoardPost";
import ReviewByWebtoon from "./Board/ReviewByWebtoon";
import FanPage from "./Board/FanPage";
import NewHome from "./tabPage/NewHome";
import GroupChatting from "./Board/GroupChatting";
import WebtoonQuiz from "./NewHome/WebtoonQuiz";
// import MyPage from "./tabPage/MyPage";
// import KakaoTest from "./Components/Common/KakaoText";

export default function Router() {
  return (
    <BrowserRouter>
        {/* <BottomNav/> */}
      <Routes>
        {/* <Route exact path='/' element={<Home />} />
        <Route path='/second' element={<Board />} />
        <Route path='/third' element={<Shorts />} />
        <Route path='/fourth' element={<LuckyDraw />} />      
        <Route path='/myPage' element={<MyPage/>} /> 
        <Route path='/board/:id' element={<BoardDetail/>}/> */}
        <Route exact path='/' element={<NewHome />} />
        <Route path='/post/:id' element={<BaordPost/>}/>
        <Route path='review/:webtoonTitle' element={<ReviewByWebtoon/>} />
        <Route path='fanpage/:fanpageId/:webtoonId' element={<FanPage/>}/>
        <Route path='GroupChatting/:webtoonId' element={<GroupChatting/>}/>
        <Route path='webtoonquiz' element={<WebtoonQuiz/>}/>
        {/* <Route path='/kakaoTest' element={<KakaoTest/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}