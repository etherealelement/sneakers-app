import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import axios from "axios";

export const App = () => {
  const [products, setProduct] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

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
    axios.post(SERVER_URL_POST, obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://644d1633cfdddac9709ca6b1.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
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

        <main className="main">
          <div className="container">
            <section className="products">
              <div className="products-title__wrap">
                <h1 className="products__title">
                  {searchValue
                    ? `Поиск по запросу: "${searchValue}"`
                    : `Все кроссовки`}
                </h1>
                <div className="search-block">
                  <img
                    src="/images/search.svg"
                    alt="Search"
                    className="search"
                  />
                  <input
                    onChange={onChangeSearchInput}
                    type="text"
                    placeholder="Поиск..."
                    className="products__input"
                  />
                </div>
              </div>

              <ul className="card-list">
                {products
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <Card
                      type={item.type}
                      name={item.name}
                      key={item.id}
                      keyId={item.id}
                      image={item.image}
                      price={item.price}
                      onClickFavorite={() =>
                        console.log("Добавлено в закладки")
                      }
                      onClickAdd={(obj) => addToCart(obj)}
                    ></Card>
                  ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
