import React from "react";

const Item = ({ itemData }) => {
  return (
    <>
      <figure>
        <a href="#trabajo-1">
          <img className="itemDataImg" src={itemData.imgWork} alt="" />
        </a>
        <p>{itemData.title}</p>
      </figure>
    </>
  );
};

export default Item;
