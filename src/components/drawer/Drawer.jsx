import React from "react";
import "./Drawer.scss";

function Drawer() {
  return (
    <>
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <div className="drawer__inner">
            <h2 className="drawer__title">
              Корзина
              <img src="images/btn-close.svg" className="close-btn" alt="" />
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
            <button className="button__buy">
              Оформить заказ
              <img src="/images/arrow-left.svg" alt="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
