import React, { useContext, useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import AppContext from "../../helpers/context";

function Header({onClickOpen}) {

  const {cartItems} = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc,item)=>{
    return acc += item.price
  },0)


	return(
			<header className={styles.Header}>
        <Link to="/">
          <div className={styles.HeaderContent}>
            <img src="/images/logo.png" alt="logo" width={40} height={40} />
            <div className={"header__content-wrap"}>
              <h3 className={styles.HeaderTitle}>REACT SNEAKERS</h3>
              <p className={styles.LogoSub}>Магазин лучших кроссовок</p>
            </div>
          </div>
          </Link>
          
          

          <div className="header__login">
            <div className={styles.HeaderLoginBox}>
              <div className={styles.HeaderLoginInner} 
              onClick={onClickOpen}
              >
                <Link><img src="./images/shop-icon.svg" alt="Корзина" /></Link>
                <span className={styles.HeaderLoginSpn}>{totalPrice} руб.</span>
              </div>
              <Link to="/favorites">
              <div>
              <img src="./images/favorites-icon.svg" alt="Закладки" />
              </div>
              </Link>
              <Link><img src="./images/login-icon.svg" alt="Личный кабинет" /></Link>
            </div>
          </div>
        </header>
	)
}

export default Header;