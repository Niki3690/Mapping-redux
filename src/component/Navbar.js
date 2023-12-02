import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let name = useSelector((state) => state.cart);

  let total = name.reduce((acc, b) => acc + b.price, 0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: 18,
          backgroundColor: "#29283E",
          padding: "22px 0",
          fontSize: 22,
        }}
      >
        <Link to="/">HOME</Link>
        <Link to="about">ABOUT</Link>
        <Link to="cart">CART</Link>

        <span style={{ color: "white", marginLeft: 655 }}>
          TOTAL ITEM:{name.length}
        </span>
        <span style={{ color: "white" }}>TOTAL:{total}</span>
      </div>
    </div>
  );
};

export default Navbar;
