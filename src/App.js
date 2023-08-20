import React, { useState, useEffect } from "react";
import { api_Key, fetchDataWithToken } from "./config/api";
function App() {
  useEffect(() => {
    apiTectIng();
  }, []);
  const apiTectIng = () => {
    fetchDataWithToken(`/movie/popular?api_key=${api_Key}`).then((res) => {
      console.log(res);
    });
  };

  return <div className="App">helo</div>;
}

export default App;
