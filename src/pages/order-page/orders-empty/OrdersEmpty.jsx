import React, { useContext } from "react";
import styles from "./OrdersEmpty.module.scss"
import AppContext from "../../../helpers/context";
import { Link } from "react-router-dom";

function OrdersEmpty({title, sub, bescr, img}) {

	return (
		<>
		<div className={styles.EmptyCard}>
			<img src={img} alt="" className={styles.CardImg} />
			<h2 className={styles.EmptyCardTitle}>{title}</h2>
			<p className={styles.EmptyCardDescr}>{sub}</p>
			<p className={styles.EmptyCardDescr}>{bescr}</p>
			<Link to="/">
			<button className={styles.EmptycartBtn} >
          <img src={"images/left-arrow.svg"} alt="images" />
          Вернуться назад
        </button>
			</Link>
		</div>
		</>
	)
}

export default OrdersEmpty;