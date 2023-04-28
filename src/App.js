import React from "react";
import { useState } from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";


const Product = [
  {
    type: "Мужские кроссовки",
    name: "Nike Blazer Mid Suede",
    price: 12344,
    id: 1,
    image: "/images/card-image.jpg"
  },
  {
    type: "Мужские кроссовки",
    name: "Nike Air Max 270",
    price: 15000,
    id: 2,
    image: "/images/shop-icon-2.jpg"
  },
  {
    type: "Мужские кроссовки",
    name: "Nike Blazer Mid Suede",
    price: 6999,
    id: 3,
    image: "/images/shop-icon-3.jpg"
  },
  {
    type: "Женские кроссовки",
    name: "Under Armour Curry 8",
    price: 12344,
    id: 4,
    image: "/images/shop-icon-4.jpg"
  },
];



export const App = () => {

  return (
    <>
      <div className="wrapper">
        <Drawer></Drawer>
        <Header></Header>

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

              <ul className="card-list">{Product.map((item) => <Card type={item.type} 
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
