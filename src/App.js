import React from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

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

              <ul className="card-list">
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
              </ul>
            </section>
          </div>
          
        </main>
      </div>
    </>
  );
};
