import React from "react";
import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import useAppContext from "../context/useAppContext";

const Product = (props) => {
  const { id, title, img, price, inCart } = props.product;

  const {addToCart,openModal} = useAppContext();

  return (
    <Section className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <img src={img} alt="" className="card-img-top" />
          <button 
            className="cart-btn" 
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id)
              openModal(id)
            }}
          >
            {inCart ? (
              <p className="mb-0">in cart</p>
            ) : (
              <BsCartPlus size={28} />
            )}
          </button>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </Section>
  );
};

export default Product;

const Section = styled.section`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainYellow);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    cursor: pointer;
  }
`;
