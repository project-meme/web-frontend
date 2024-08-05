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

  useEffect(()=>{
    fetchData();
    console.log(genreBoard);
  });

  return (
    <Layout home={true}>
      <MainBanner />
      <Category data={genreBoard}/>
      <BestScene />
    </Layout>
);
}