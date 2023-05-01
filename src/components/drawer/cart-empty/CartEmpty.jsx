import React from "react";
import styles from "./CartEmpty.module.scss";

function CartEmpty({onClickClose}) {
  return (
    <>
      <div className={styles.cartWrapper}>
        <div className={styles.cartInner}>
          <img src="images/cart.jpg" alt="" />
          <h3 className={styles.cartTitle}>Корзина пустая</h3>
          <p className={styles.cartDescr}>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
        </div>
        <button onClick={onClickClose}className={styles.cartBtn} >
          <img src="images/left-arrow.svg" alt="images" />
          Вернуться назад
        </button>
      </div>
    </>
  );
}

export default CartEmpty;
