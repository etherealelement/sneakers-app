import React from "react";
import styles from "./FavEmpty.module.scss";
import OrdersEmpty from "../../order-page/orders-empty/OrdersEmpty";

function FavEmpty({title, sub, img}) {
	return (
		<>
		<OrdersEmpty title={title} sub={sub} img={img}></OrdersEmpty>
		</>
	)
}

export default FavEmpty;