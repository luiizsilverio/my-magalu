const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem('mymagalu.cart', JSON.stringify(cart));
}

export const sumItems = (cartItems) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce((acc, prod) => acc + prod.quantity, 0),
    total: cartItems.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
  }
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      // check if item is in cart
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        })
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems)
      }

    case 'INCREASE_ITEM':
      const idx = state.cartItems.findIndex(item => item.id === action.payload.id);
      state.cartItems[idx].quantity ++;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems)
      }

    case 'DECREASE_ITEM':
      const idxD = state.cartItems.findIndex(item => item.id === action.payload.id);
      const product = state.cartItems[idxD];

      if (product.quantity > 1) {
        product.quantity --;
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems)
      }

    case 'REMOVE_ITEM':
      const newCart = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: [...newCart],
        ...sumItems(newCart)
      }

    case 'CLEAR_CART':
      localStorage.removeItem('mymagalu.cart');
      return {
        cartItems: [],
        itemCount: 0,
        total: 0
      }

    default:
      return state;
  }
}

export default cartReducer;