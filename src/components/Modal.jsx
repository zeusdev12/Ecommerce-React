import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAppContext from "../context/useAppContext";
import { ButtonContainer } from "./Button";

const Modal = () => {
  const { modalOpen,modalProduct,closeModal } = useAppContext();
    const {img,title,price} = modalProduct;

  return (
    <React.Fragment>
        {
            modalOpen ? (
               <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize" id="modal">
                            <h5>Item added to cart</h5>

                            <img src={img} alt={title} className="img-fluid" />
                            <h5>{title}</h5>
                            <h5 className="text-muted">
                                price : ${price}
                            </h5>
                            <Link to="/">
                               <ButtonContainer
                                    onClick={() => {
                                        closeModal();
                                    }}
                               >
                                    Continue Shopping
                               </ButtonContainer> 
                            </Link>
                            <Link to="/cart">
                               <ButtonContainer
                                    cart
                                    onClick={() => {
                                        closeModal();
                                    }}
                                >
                                    Go To Cart
                               </ButtonContainer> 
                            </Link>
                        </div>
                    </div>
                </div>
               </ModalContainer> 
            ):(
                null
            )
        }
    </React.Fragment>
  )
};

export default Modal;

const ModalContainer = styled.section`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`
