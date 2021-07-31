import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div className="main__image">
      <div>
        <img src={props.posts.image} alt="" />
      </div>
      <h4>{props.posts.label}</h4>
      <h4>{props.posts.source}</h4>
    </div>
  );
}

export default Image;
