import React from "react";
import styles from "./drawer.module.scss";

function Drawer() {
  return (
    <>
      <div style={{ display: "flex" }} className={styles.Overlay}>
        <div className={styles.Drawer}>
          <div className="drawer__inner">
            <h2 className={styles.DrawerTitle}>
              Корзина
              <img src="images/btn-close.svg" className="close-btn" alt="" />
            </h2>

            <ul className="cart">
              <li className={styles.CartItem}>
                <img
                  width="70px"
                  height="70px"
                  src="images/shop-icon-2.jpg"
                  alt="shop"
                />
                <div className={styles.CartItemBox}>
                  <p className={styles.CartItemTitle}>
                    Мужские Кроссовки Nike Air Max 270
                  </p>
                  <b className="cart__item-sub">12 999 руб.</b>
                </div>
                <button className={styles.DeleteButton}>
                  <img
                    src="images/btn-close.svg"
                    className={styles.CloseBtn}
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.Total}>
            <div className={styles.TotalFirst}>
              <p className="total__title">Итого: </p>
              <div className="border"></div>
              <p className="total__price">21 498 руб.</p>
            </div>
            <div className={styles.TotalSecond}>
              <p className={styles.TotalTitle }>Налог 5%:</p>
              <div className={styles.Border}></div>
              <p className={styles.TotalPrice}>1074 руб.</p>
            </div>
            <button className={styles.ButtonBuy}>
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
