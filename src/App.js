import React, { useState } from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

const Product = [
  {
    "type": "Мужские кроссовки",
    "name": "Nike Blazer Mid Suede",
    "price": 12344,
    "id": 1,
    "image": "/sneakers-item/1.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Air Max 270",
    "price": 12999,
    "id": 2,
    "image": "/sneakers-item/2.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Blazer Mid Suede",
    "price": 8499,
    "id": 3,
    "image": "/sneakers-item/3.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Puma X Aka Boku Future",
    "price": 8999,
    "id": 4,
    "image": "/sneakers-item/4.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Under Armour Curry 8",
    "price": 15199,
    "id": 5,
    "image": "/sneakers-item/5.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Kyrie 7",
    "price": 11299,
    "id": 6,
    "image": "/sneakers-item/6.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Jordan Air Jordan 11",
    "price": 10799,
    "id": 7,
    "image": "/sneakers-item/7.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike LeBron XVIII",
    "price": 16499,
    "id": 8,
    "image": "/sneakers-item/8.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Lebron XVIII Low",
    "price": 13999,
    "id": 9,
    "image": "/sneakers-item/9.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Blazer Mid Suede",
    "price": 8499,
    "id": 10,
    "image": "/sneakers-item/10.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Aka Boku Future Rider",
    "price": 8999,
    "id": 11,
    "image": "/sneakers-item/11.jpg"
  },
  {
    "type": "Мужские Кроссовки",
    "name": "Nike Kyrie Flytrap IV",
    "price": 11299,
    "id": 12,
    "image": "/sneakers-item/12.jpg"
  }
];



export const App = () => {


const [openCart, setOpenCart] = useState(false)

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
