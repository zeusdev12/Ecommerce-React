import React from "react";
import { BsTrash } from "react-icons/bs";
import useAppContext from "../../context/useAppContext";

const CartItem = ({ item }) => {
  const { id, title, img, price, total, count } = item;
  const {increment,decrement,removeItem} = useAppContext()

  return (
    <div className="row my-1 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
          <span className="d-lg-none">price :</span>${price}
        </strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="text-warning cursor-pointer" onClick={() => removeItem(id)}>
          <BsTrash size={24} />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <strong>item total : ${total} </strong>
      </div>
    </div>
  );
};

export default CartItem;
