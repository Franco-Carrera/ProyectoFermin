import React from "react";

const ItemTwo = ({ linkData }) => {
  return (
    <>
      <figure>
        <img src={linkData.imgGen} alt="" />
      </figure>
      {/* <h2>{linkData.description}</h2> */}
    </>
  );
};

export default ItemTwo;
