import React from "react";
import "./App.scss";
import "macro-css";

export const App = () => {
  return (
    <>
      <div className="wrapper">
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
					<img src="/images/search.svg" alt="Search" className="search"/>
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="products__input"
                  />
                </div>
              </div>

              <ul className="card-list">
                <li className="card-list__item">
                  <img
                    src="/images/card-image.jpg"
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
