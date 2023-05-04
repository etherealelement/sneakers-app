import React, { useEffect, useState } from "react";
import "./App.scss";
import "macro-css";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/Home";
import Favorites from "./pages/favorites-page/Favorites";
import AppContext from "./helpers/context";


export const App = () => {
  const [products, setProduct] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Получение данных с сервера
  const SERVER_URL = "https://644d1633cfdddac9709ca6b1.mockapi.io/items";
  const SERVER_URL_POST = "https://644d1633cfdddac9709ca6b1.mockapi.io/cart";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
     const itemsResponse = await axios.get(SERVER_URL);
      const cartResponse = await axios.get(SERVER_URL_POST);

      setLoading(false);

      setProduct(itemsResponse.data)
      setCartItems(cartResponse.data)
    }
    fetchData()
  }, []);

  //

  const addToCart = (obj) => {
    
    if (cartItems.find((item) => Number(item.id )=== Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://644d1633cfdddac9709ca6b1.mockapi.io/cart/${obj.id}`);
    } else {
      try {
        axios.post(SERVER_URL_POST, obj);
        setCartItems((prev) => [...prev, obj]);
      } catch (error) {
        alert(error);
      }
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://644d1633cfdddac9709ca6b1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded =(id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }


  return (
    <>
      <AppContext.Provider value = {{cartItems, isItemAdded, setOpenCart, setCartItems, SERVER_URL_POST}}>
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
          <Route
            path="/"
            element={
              <HomePage
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                products={products}
                addToCart={addToCart}
                isLoading={isLoading}
                hasAdded = {isItemAdded}
              ></HomePage>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites   onClickFav={addToCart}></Favorites>
            }
          ></Route>
        </Routes>
      </div>
      </AppContext.Provider>
    </>
  );
};
