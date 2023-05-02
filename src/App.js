import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import "macro-css";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/Home";
import Favorites from "./pages/favorites-page/Favorites";

export const App = () => {
  const [products, setProduct] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState();

  // Получение данных с сервера
  const SERVER_URL = "https://644d1633cfdddac9709ca6b1.mockapi.io/items";
  const SERVER_URL_POST = "https://644d1633cfdddac9709ca6b1.mockapi.io/cart";

  useEffect(() => {
    axios.get(SERVER_URL).then((res) => {
      setProduct(res.data);
    });
    axios.get(SERVER_URL_POST).then((res) => {
      setCartItems(res.data);
    });
  }, []);
  //

  const addToCart = (obj) => {
    try {
      axios.post(SERVER_URL_POST, obj);
      setCartItems((prev) => [...prev, obj]);
    } catch (error) {
      alert(error)
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://644d1633cfdddac9709ca6b1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
        <div className="wrapper">
          {openCart && (
            <Drawer
              onRemove={onRemoveItem}
              drawerProduct={cartItems}
              onClose={() => setOpenCart(false)}
            ></Drawer>
          )}
          <Header onClickOpen={() => setOpenCart(true)}></Header>

            <Routes>
            <Route path="/" element={<HomePage
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                products={products}
                addToCart={addToCart}
              ></HomePage>}>
            </Route>
            </Routes>

            <Routes>
            <Route path="/favorites" element={<Favorites items={cartItems} onClickAdd={addToCart}></Favorites>}>
            </Route>
            </Routes>
        </div>
    </>
  );
};
