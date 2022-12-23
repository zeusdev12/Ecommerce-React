import React from "react";
import { storeProducts, detailProduct } from "../data";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts()
  }

  getTotals = () => {
    const subTotal = this.state.cart
      .map((item) => item.total)
      .reduce((sum, price) => (sum += price), 0);

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    return {
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const totals = this.getTotals();

    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  setProducts = () => {
    let products = [];
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    storeProducts.forEach((item) => {
      const index = cart.findIndex((product) => product.id === item.id);
      let singleItem = null;

      if(index !== -1){
        const {inCart,total,count} = cart[index];
        singleItem = {...item,inCart,total,count};
      }else{
        singleItem = { ...item };
      }
      products = [...products, singleItem];
    });

    this.setState(
      () => {
        return { products,cart };
      },
      this.addTotals
    );
  };

  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product },
      };
    }, () => {
      this.addTotals()
      localStorage.setItem("cart",JSON.stringify(this.state.cart))
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => ({ modalProduct: product, modalOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalOpen: false }));
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => item.id !== id);

    this.setState(
      () => ({
        cart: [...tempCart],
        products: [...tempProducts],
      }),
      () => {
        this.addTotals()
        localStorage.setItem("cart",JSON.stringify(tempCart))
      }
    );
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const index = tempCart.findIndex((product) => product.id === id);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(() => ({ cart: [...tempCart] }), () => {
      this.addTotals();
      localStorage.setItem("cart",JSON.stringify(tempCart));
    });
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const index = tempCart.findIndex((product) => product.id === id)
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => ({ cart: [...tempCart] }), () => {
        this.addTotals()
        localStorage.setItem("cart",JSON.stringify(tempCart))
      });
    }
  };

  clearCart = () => {
    this.setState(
      () => ({ cart: [] }),
      () => {
        localStorage.removeItem("cart")
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const useAppContext = () => React.useContext(AppContext);

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };

export default useAppContext;
