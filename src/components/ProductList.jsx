import React from "react";
import useAppContext from "../context/useAppContext";

import { Product, Title } from "./";

const ProductList = () => {
  const { products } = useAppContext();

  return (
    <section className="py-5">
      <div className="container">
        <Title name="our" title="products" />

        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
