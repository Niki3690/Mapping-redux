import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Cart from "./component/pages/Cart";
import Navbar from "./component/Navbar";
import { Provider } from 'react-redux'
import Store from "./component/store/Store";
import Single from "./component/Single";

const App = () => {
  return (
    <>
    <Provider store={Store}>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="item/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
