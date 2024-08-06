import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fourth from "./tabPage/Fourth";
import Third from "./tabPage/Third";
import Second from "./tabPage/Second"
import Home from "./tabPage/Home"
import BottomNav from "./BottomNav"
import BoardDetail from "./Board/BoardDetail";
import BaordPost from "./Board/BoardPost";


export default function Router() {
  return (
    <BrowserRouter>
        <BottomNav/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<Fourth />} />        
        <Route path='/board/:id' element={<BoardDetail/>}/>
        <Route path='/board/post/:id' element={<BaordPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}