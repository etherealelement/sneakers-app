import React, { useEffect, useState } from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";


export const App = () => {

  const [products, setProduct] = useState([]);
  const [openCart, setOpenCart] = useState(false);


// Получение данных с сервера
const SERVER_URL = "https://644d1633cfdddac9709ca6b1.mockapi.io/items"

useEffect(()=> {
  getProduct();
}, [])
const getProduct = async () => {
  const response = await fetch(SERVER_URL);
  const products = await response.json();
  setProduct(products)
}

  return (
    <>
      <div className="wrapper">
        {openCart && <Drawer onClose={() => setOpenCart(false)}></Drawer>}
        <Header onClickOpen={()=>setOpenCart(true)}></Header>

        <main className="main">
          <div className="container">
            <section className="products">
              <div className="products-title__wrap">
                <h1 className="products__title">Все кроссовки</h1>
                <div className="search-block">
                  <img
                    src="/images/search.svg"
                    alt="Search"
                    className="search"
                  />
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="products__input"
                  />
                </div>
              </div>

              <ul className="card-list">{products.map((item) => <Card type={item.type} 
              name={item.name} 
              key={item.id} 
              image={item.image} 
              price={item.price}
              onClickFavorite={()=> alert("Добавлено в закладки")}
              onClickAdd={()=> alert("Добавлено в корзину")}
              ></Card>)}</ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
