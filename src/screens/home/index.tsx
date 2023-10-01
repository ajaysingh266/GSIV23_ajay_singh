import React from "react";
import "./index.scss";
import Banner from "./component/card";
import { connect } from "react-redux";
const Home = (props: { data: Record<string, any>[] }) => {
  // console.log("data", props.data);
  return (
    <div>
      {/* {props.data.length ? (
        <>
          {props.data.map((item) => {
            return <Banner item={props} key={item.id} />;
          })}
        </>
      ) : (
        <p>No data Found</p>
      )} */}
      hello
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  data: state.home,
});
export default connect(mapStateToProps)(Home);
