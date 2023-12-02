import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";

const Single = () => {
  let { id } = useParams();

  let item = Data.find((p) => p.id == id);
  return (
    <div
      style={{
        textAlign: "center",
        outlineOffset: 2,
        paddingBottom: 15,
        border: "2px solid green",
        width: 500,
        display: "object",
        margin: "0px auto",
        marginTop: 50,
        borderRadius: 15,
        outline: "2px solid red",
      }}
    >
      <h1 style={{ height: 35, paddingTop: 15, paddingBottom: 15 }}>
        {item.id}
      </h1>
      <img src={item.images} style={{ width: 500, height: 290 }} />
      <h3 style={{ height: 60, marginTop: 15 }}>
        <span style={{ fontSize: 22 }}>Title: </span>
        {item.title}
      </h3>
      <h3 style={{ height: 60 }}>
        <span style={{ fontSize: 22 }}>description: </span>
        {item.description}
      </h3>
      <h3 style={{ height: 60 }}>
        <span style={{ fontSize: 22 }}>name: </span>
        {item.category.name}
      </h3>
      <h3 style={{ height: 60 }}>
        <span style={{ fontSize: 22 }}>price: </span>
        {item.price}
      </h3>
    </div>
  );
};

export default Single;
