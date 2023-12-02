import React from "react";
import { Data } from "./Data";
import { useDispatch } from "react-redux";
import { add } from "./store/Cartslice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  let item = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let ADD = (item) => {
    dispatch(add(item));
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 320px 320px",
          gap: 30,
          justifyContent: "center",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        {Data.map((item) => {
          return (
            <div
              style={{
                border: "2px solid green",
                outline: "2px solid black",
                outlineOffset: 2,
                paddingBottom: 15,
              }}
            >
              <h4 style={{ height: 35, paddingTop: 15 }}>{item.id}</h4>

              <Link to={`/item/${item.id}`}>
                <img src={item.images} style={{ width: 316, height: 220 }} />
              </Link>
              <h3 style={{ height: 40 }}>{item.title}</h3>
              <h3 style={{ height: 40 }}>{item.price}</h3>
              <button onClick={() => ADD(item)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
