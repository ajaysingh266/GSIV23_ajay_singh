import React from "react";

const Banner = (props: {
  item: Record<string, string | number | boolean | Record<string, number>[]>;
}) => {
  return (
    <div>
      <img src={props.item.backdrop_path.toString()} />
    </div>
  );
};

export default Banner;
