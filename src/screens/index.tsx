import React, { useEffect } from "react";
import { fetchDataWithToken } from "../config/api";
import { connect } from "react-redux";
import { getApiConfiguration } from "store/reducers/homeSlice";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Navbar from "components/Navbar";
// import Footer from "components/footer";
import Home from "./home";

const Index: React.FC = (props: any) => {
  console.log("props", props);

  useEffect(() => {
    fetchDataWithToken(`/movie/popular`).then((res) => {
      // console.log(res);
      props.getApiConfiguration(res);
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
const mapStateToProps = (state: any) => ({
  url: state.home.url,
});

export default connect(mapStateToProps, { getApiConfiguration })(Index);
