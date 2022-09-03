import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItem from "./cart-item";
import './cart-page.styles.scss';
import Total from "./total";

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease } = useContext(CartContext);

  return (
    <Layout>
      <h1>Carrinho</h1>
      {
        cartItems.length === 0 ? (
          <div className="empty-cart">Seu carrinho está vazio</div>
        ) : (
          <div className="cart-page">
            <div className="cart-item-container">
              {
                cartItems.map(item => (
                  <CartItem { ...item } key={ item.id } />
                ))
              }
            </div>
            <Total itemCount={itemCount} total={total} />
          </div>
        )
      }
    </Layout>
  )
}

export default CartPage;