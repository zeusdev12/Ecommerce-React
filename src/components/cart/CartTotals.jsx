import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../context/useAppContext";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = useAppContext();

  const emptyCart = cart.length === 0 ? true : false;

  return (
    <React.Fragment>
      {!emptyCart && (
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  clear cart
                </button>
              </Link>
              <h5>
                <span className="text-title">subTotal :</span>{" "}
                <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">tax : </span>{" "}
                <strong>$ {cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">Total : </span>{" "}
                <strong>$ {cartTotal}</strong>
              </h5>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CartTotals;
