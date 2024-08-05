import axios from "axios";

export const getGenreBoardList = async () => {
    try {
      const res = await axios.get(`/api/community/genre/list`);
      return res["data"];
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };