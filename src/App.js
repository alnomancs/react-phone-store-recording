import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart/Cart";
import Default from "./component/Default";
import { Route, Routes } from "react-router-dom";
import Modal from "./component/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<ProductList></ProductList>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/*" element={<Default></Default>}></Route>
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
