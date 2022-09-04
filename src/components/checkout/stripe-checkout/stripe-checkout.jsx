import { useState, useContext } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../../context/cart-context";
import { fetchFromAPI } from "../../../helpers";

const StripeCheckout = () => {
  const [email, setEmail] = useState('');
  const { cartItems } = useContext(CartContext);
  const stripe = useStripe();

  const handleCheckout = async (e) => {
    e.preventDefault();

    const line_items = cartItems.map(item => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'brl',
          unit_amount: (item.price * 100),
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl]
          }
        }
      }
    })

    const response = await fetchFromAPI('create-checkout-session', {
      body: {
        line_items,
        customer_email: email
      }
    })

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.warn(error);
      alert('Erro ao processar pagamento');
    }
  }

  return (
    <form onSubmit={handleCheckout}>
      <div>
        <input type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          value={email}
          className='nomad-input'
        />
      </div>
      <div className="submit-btn">
        <button type="submit" className="button is-black nomad-button">
          Fechar o Pedido
        </button>
      </div>
    </form>
  )
}

export default StripeCheckout;