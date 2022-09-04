import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout";
import './checkout.styles.scss';

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <div className="checkout">
        <h2>Resumo do Pedido</h2>
        <h3>{ `Total de Itens: ${itemCount}`}</h3>
        <h4>{ `Valor Total: R$ ${total}`}</h4>
      </div>
    </Layout>
  )
}

export default Checkout;