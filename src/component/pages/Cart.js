import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/Cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  let product = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let Remove = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div>
      {product.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: 45, fontSize: 55 }}>
            Your cart is empty
          </h1>

          <Link to="/">
            <button
              style={{ marginLeft: 580, marginTop: 25, padding: "15px  40px" }}
            >
              GO BACK
            </button>
          </Link>
        </div>
      ) : (
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
          {product.map((item) => {
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
                <img src={item.images} style={{ width: 316, height: 220 }} />
                <h3 style={{ height: 40 }}>{item.title}</h3>
                <h3 style={{ height: 40 }}>{item.price}</h3>
                <button onClick={() => Remove(item.id)}>Remove To Cart</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
