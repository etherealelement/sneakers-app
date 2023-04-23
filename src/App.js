import React from 'react';
import "./App.scss"

export const App = () => {
  return <>
    <header className="header" >
      <div className="header__content">
        <a href="#">
        <img src="/images/logo.png" alt="logo" width={40} height={40}/>
        </a>
        <div className="header__content-wrap">
        <h3 className="header__title">REACT SNEAKERS</h3>
        <p className="logo__sub">
        Магазин лучших кроссовок
        </p>
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
  </>;
};