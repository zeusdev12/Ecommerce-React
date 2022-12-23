import React, { useState } from "react";
import {
  Collapse,
  Navbar as Navigation,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import {FaMobileAlt} from "react-icons/fa"
import {BsCartPlus} from "react-icons/bs"
import { Link, useHistory } from "react-router-dom";

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navigation color="warning" dark expand="md" sticky="top" {...props} className="px-5">
        <NavbarBrand className="d-flex align-items-center cursor-pointer" onClick={() => history.push("/")}>

          <FaMobileAlt size={32} />&nbsp;&nbsp;
          <span>
            Products
          </span>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
          </Nav>
          <NavbarText>
            <Link to="/cart" className="btn btn-outline-light btn-outline">
              <BsCartPlus size={32} />
              <span className="mx-2">
                My Cart
              </span>
            </Link>
          </NavbarText>
        </Collapse>
      </Navigation>
    </div>
  );
}

export default Navigationbar;
