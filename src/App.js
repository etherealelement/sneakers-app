import React from "react";
import "./App.scss";
import "macro-css";
import Card from "./components/card/Card";

export const App = () => {
  return (
    <>
      <div className="wrapper">
      <div style={{display: "none"}}className="overlay">
          <div className="drawer">
            <div className="drawer__inner">
              <h2 className="drawer__title">Корзина
              <img
                      src="images/btn-close.svg"
                      className="close-btn"
                      alt=""
                    />
              </h2>

              <ul className="cart">
                <li className="cart__item">
                  <img
                    width="70px"
                    height="70px"
                    src="images/shop-icon-2.jpg"
                    alt="shop"
                  />
                  <div className="cart__item-box">
                    <p className="cart__item-title">
                      Мужские Кроссовки Nike Air Max 270
                    </p>
                    <b className="cart__item-sub">12 999 руб.</b>
                  </div>
                  <button className="delete-button">
                    <img
                      src="images/btn-close.svg"
                      className="close-btn"
                      alt=""
                    />
                  </button>
                </li>
                <li className="cart__item">
                  <img
                    width="70px"
                    height="70px"
                    src="images/shop-icon-3.jpg"
                    alt="shop"
                  />
                  <div className="cart__item-box">
                    <p className="cart__item-title">
                      Мужские Кроссовки Nike Air Max 270
                    </p>
                    <b className="cart__item-sub">8 499 руб.</b>
                  </div>
                  <button className="delete-button">
                    <img
                      src="images/btn-close.svg"
                      alt=""
                      className="close-btn"
                    />
                  </button>
                </li>
              </ul>
            </div>

            <div className="total">
              <div className="total-1">
                <p className="total__title">Итого: </p>
                <div className="border"></div>
                <p className="total__price">21 498 руб.</p>
              </div>
              <div className="total-2">
                <p className="total__title">Налог 5%:</p>
                <div className="border"></div>
                <p className="total__price">1074 руб.</p>
              </div>
              <button className="button__buy">Оформить заказ
              <img src="/images/arrow-left.svg" alt="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="header__content">
            <a href="#">
              <img src="/images/logo.png" alt="logo" width={40} height={40} />
            </a>
            <div className="header__content-wrap">
              <h3 className="header__title">REACT SNEAKERS</h3>
              <p className="logo__sub">Магазин лучших кроссовок</p>
            </div>
          </div>

          <div className="header__login">
            <div className="header__login-box">
              <div className="header__loghin-inner">
                <img src="./images/shop-icon.svg" alt="shop" />
                <span className="header__login-spn">1205 руб.</span>
              </div>
              <img src="./images/favorites-icon.svg" alt="" />
              <img src="./images/login-icon.svg" alt="" />
            </div>
          </div>
        </header>

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

                <li className="card-list__item">
                  <img
                    src="/images/shop-icon-2.jpg"
                    alt=""
                    className="card-list__img"
                    width="133px"
                  />
                  <div className="card-list__inner">
                    <p className="card-list__title">Мужские Кроссовки</p>
                    <p className="card-list__subtitle">Nike Air Max 270</p>
                  </div>
                  <div className="card-wrap">
                    <div className="card-inner">
                      <span className="card__list-sub">Цена:</span>
                      <p className="card__list-price">12 999 руб.</p>
                    </div>
                    <button className="card-button__wrap">
                      <img src="/images/add-item.svg" alt="" />
                    </button>
                  </div>
                </li>

                <li className="card-list__item">
                  <img
                    src="/images/shop-icon-3.jpg"
                    alt=""
                    className="card-list__img"
                    width="133px"
                  />
                  <div className="card-list__inner">
                    <p className="card-list__title">Мужские Кроссовки</p>
                    <p className="card-list__subtitle">Nike Blazer Mid Suede</p>
                  </div>
                  <div className="card-wrap">
                    <div className="card-inner">
                      <span className="card__list-sub">Цена:</span>
                      <p className="card__list-price">12 999 руб.</p>
                    </div>
                    <button className="card-button__wrap">
                      <img src="/images/add-item.svg" alt="" />
                    </button>
                  </div>
                </li>

                <li className="card-list__item">
                  <img
                    src="/images/shop-icon-4.jpg"
                    alt=""
                    className="card-list__img"
                    width="133px"
                  />
                  <div className="card-list__inner">
                    <p className="card-list__title">Мужские Кроссовки</p>
                    <p className="card-list__subtitle">
                      Puma X Aka Boku <br></br>Future Rider
                    </p>
                  </div>
                  <div className="card-wrap">
                    <div className="card-inner">
                      <span className="card__list-sub">Цена:</span>
                      <p className="card__list-price">12 999 руб.</p>
                    </div>
                    <button className="card-button__wrap">
                      <img src="/images/add-item.svg" alt="" />
                    </button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          
        </main>
      </div>
    </>
  );
};
