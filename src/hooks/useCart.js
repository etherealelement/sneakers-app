import React, {useContext} from "react"
import AppContext from "../helpers/context"

export const useCart = () => { 
	const {cartItems, setCartItems} = useContext(AppContext);
	const TotalPrice = cartItems.reduce((acc,item) => {
    return acc += item.price;
  },0)
	return {cartItems, setCartItems, TotalPrice};
}