import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
export const api_Key = "b54497941957245f74ad5444d77841f7";

const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQ0OTc5NDE5NTcyNDVmNzRhZDU0NDRkNzc4NDFmNyIsInN1YiI6IjY0ZTAzNTcwMDc2Y2U4MDExZDE1MWU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBncMg2JAlWVYoXhD_h-vCk5rH0ocNkuv-aNuuqlhvY";
const commonHeaders = {
  Authorization: "Bearer " + TMBD_TOKEN,
};

export const fetchDataWithToken = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      commonHeaders,
      params,
    });
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
