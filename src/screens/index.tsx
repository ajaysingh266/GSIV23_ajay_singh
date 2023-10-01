import React, { useEffect } from "react";
import { fetchDataWithToken } from "../config/api";
import { connect } from "react-redux";
import { getMovies } from "store/reducers/homeSlice";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Navbar from "components/Navbar";
// import Footer from "components/footer";
import Home from "./home";

const Index: React.FC = (props: any) => {
  useEffect(() => {
    fetchDataWithToken(`/movie/popular`).then((res) => {
      console.log("screen data", res);
      // props.getApiConfiguration(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default connect(null, { getMovies })(Index);
