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

  // 딥링크 URL (앱 내부에서 처리될 경로)
  const appLink = "isekai://post/456";

  const isAndroid = /Android/.test(navigator.userAgent);
  // const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  
  // 앱스토어 또는 플레이스토어 URL
  const storeLink = isAndroid
  ? "https://play.google.com/store/apps/details?id=com.isekai.isekai"
  : "https://apps.apple.com/kr/app/isekai/id6473546532";

  const checkAppInstalled = () => {
    // const startTime = Date.now();

    // 딥링크 호출
    window.location.href = appLink;

    // 1.5초 후 사용자가 앱 설치 여부에 따라 앱이 실행되지 않았다면 스토어로 리디렉션
    setTimeout(() => {
      // const elapsedTime = Date.now() - startTime;
      // if (elapsedTime < 1500) {
      //   // 앱이 없는 경우 앱 스토어로 리디렉션
        window.location.href = storeLink;
      // }
    }, 1500);
  };

  useEffect(()=>{
    fetchData();
    console.log(genreBoard);
    checkAppInstalled();
    if (
      /Android/.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/.test(navigator.userAgent)
    ) {
      window.location.href =
        "https://apps.apple.com/kr/app/isekai/id6473546532";
    } else {
      alert("앱을 다운로드해주세요!");
    }
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