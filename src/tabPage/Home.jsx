import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import MainBanner from "../Components/Home/MainBanner";
import Category from "../Components/Home/Category";
import { getGenreBoardList } from "../api/Home/Home";
import BestScene from "../Components/Home/BestScene";

export default function Home() {
  const [genreBoard, setGenreBoard] = React.useState([]);

  const fetchData = async () => {
    try {
      const genreBoard = await getGenreBoardList();
      setGenreBoard(genreBoard);
      console.log(genreBoard, 'genreboard');
    } catch (error) {
      console.error("error", error);
    }
  };

  // 딥링크 URL (앱 내부에서 처리될 경로
  useEffect(()=>{
    fetchData();
    console.log(genreBoard);
  });

  const redirectToAppStore = () => {
    if (
      /Android/.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/.test(navigator.userAgent)
    ) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.isekai.app";
    } else {
      alert("앱을 다운로드해주세요!");
    }
  };

  return (
    <Layout home={true}>
      <MainBanner />
      <button onClick={redirectToAppStore}>앱 열기</button>
      <Category data={genreBoard}/>
      <BestScene />
    </Layout>
);
}