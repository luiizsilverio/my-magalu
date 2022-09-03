import { createContext, useReducer } from "react";
import cartReducer, { sumItems } from "./cart-reducer";

export const CartContext = createContext();

const  cartFromStorage = localStorage.getItem('mymagalu.cart') ?
  JSON.parse(localStorage.getItem('mymagalu.cart')) : [];

const totCart = sumItems(cartFromStorage);

const initialState = {
  cartItems: cartFromStorage,
  itemCount: totCart.itemCount,
  total: totCart.total
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const increase = (product) => dispatch({ type: 'INCREASE_ITEM', payload: product });
  const decrease = (product) => dispatch({ type: 'DECREASE_ITEM', payload: product });
  const removeProduct = (product) => dispatch({ type: 'REMOVE_ITEM', payload: product });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
  }

  return (
    <CartContext.Provider value = { contextValues }>
      {
        children
      }
    </CartContext.Provider>
  )
}

export default CartContextProvider;
