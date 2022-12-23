import React from "react";
import useAppContext from "../../context/useAppContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useAppContext();

  return (
    <div className="container-fluid">
        {
            cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))
        }
    </div>
  )
};

export default CartList;
