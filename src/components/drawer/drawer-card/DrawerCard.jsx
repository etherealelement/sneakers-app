import React from "react";
import styles from "./DrawerCard.module.scss";

function DrawerCard({type,url,price,name, keyId}) {
  return (
    <>
      <li className={styles.CartItem} key={keyId}>
        <img
          width="70px"
          height="70px"
          src={url}
          alt="shop"
        />
        <div className={styles.CartItemBox}>
        <p className={styles.CartItemTitle}>
            {type}
          </p>
          <p className={styles.CartItemTitle}>
            {name}
          </p>
          <b className="cart__item-sub">{price}</b>
        </div>
        <button className={styles.DeleteButton}>
          <img src="images/btn-close.svg" className={styles.CloseBtn} alt="" />
        </button>
      </li>
    </>
  );
}

export default DrawerCard;
