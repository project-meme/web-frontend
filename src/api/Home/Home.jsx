import axios from "axios";

export const getGenreBoardList = async () => {
    try {
      const res = await axios.get(`http://43.200.195.85/api/community/character/quotes?id=77`);
      return res["data"];
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };