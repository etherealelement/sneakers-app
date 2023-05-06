import React, { useContext } from "react";
import styles from "./CartEmpty.module.scss";
import AppContext from "../../../helpers/context";

function CartEmpty({image, title, descr}) {
  const {setOpenCart} = useContext(AppContext)


  return (
    <>
      <div className={styles.cartWrapper}>
        <div className={styles.cartInner}>
          <img src={image} alt="" />
          <h3 className={styles.cartTitle}>{title}</h3>
          <p className={styles.cartDescr}>
            {descr}
          </p>
        </div>
        <button onClick={() => setOpenCart(false)}className={styles.cartBtn} >
          <img src="sneakers-app/images/left-arrow.svg" alt="images" />
          Вернуться назад
        </button>
      </div>
    </>
  );
}

export default CartEmpty;
