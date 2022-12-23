import React from "react";
import useAppContext from "../context/useAppContext";
import {CartColumns,Title,CartList, EmptyCart, CartTotals} from "./";

const Cart = () => {
  const { cart } = useAppContext();

  return <section>
    {
      (cart.length > 0) ? (
        <React.Fragment>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList />
          <CartTotals />
        </React.Fragment>
      ):(
        <EmptyCart />
      )
    }
  </section>;
};

export default Cart;
