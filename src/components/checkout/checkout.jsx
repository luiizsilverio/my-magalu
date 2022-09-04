import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout";
import StripeCheckout from "./stripe-checkout/stripe-checkout";
import './checkout.styles.scss';

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <div className="checkout">
        <h2>Resumo do Pedido</h2>
        <h3>Total de Itens: <span>{`${itemCount}`}</span></h3>
        <h3>Valor Total: R$ <span>{`${total.toFixed(2)}`}</span></h3>
        <StripeCheckout />
      </div>
    </Layout>
  )
}

export default Checkout;