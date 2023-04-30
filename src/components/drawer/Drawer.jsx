import React from "react";
import styles from "./drawer.module.scss";
import DrawerCard from "./drawer-card/DrawerCard";

function Drawer({onClose, drawerProduct = []}) {
  console.log(drawerProduct);
  return (
    <>
      <div className={styles.Overlay}>
        <div className={styles.Drawer}>
          <div className="drawer__inner">
            <h2 className={styles.DrawerTitle}>
              Корзина
              <button className={styles.ButtonClose}onClick={onClose}>
              <img src="images/btn-close.svg" className="close-btn" alt=""/>
              </button>
            </h2>

            <ul className="cart">
            {
              drawerProduct.map(item => {
                console.log(item.id);
                return <DrawerCard url={item.image} type={item.type} name={item.name} price={item.price} key={item.id}></DrawerCard>
              })
            }
            </ul>
          </div>

          <div className={styles.Total}>
            <div className={styles.TotalFirst}>
              <p className={styles.TotalTitle}>Итого: </p>
              <div className={styles.Border}></div>
              <p className={styles.TotalPrice}>21 498 руб.</p>
            </div>
            <div className={styles.TotalSecond}>
              <p className={styles.TotalTitle}>Налог 5%:</p>
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
