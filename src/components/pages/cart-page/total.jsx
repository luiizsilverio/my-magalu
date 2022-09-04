import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../../context/cart-context";
import './cart-page.styles.scss';

const Total = ({ itemCount, total }) => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  return (
    <div className="total-container">
      <div className="total">
        <p>Total de Itens: &nbsp; <span>{itemCount}</span></p>
        <p>Valor Total: &nbsp; <span>R$ {total.toFixed(2)}</span></p>
      </div>
      <div className="total-checkout">
        <button className="button is-black"
          onClick={() => navigate('/checkout')}
        >COMPRAR
        </button>
        <button className="button btn-white-outline"
          onClick={clearCart}
        >LIMPAR
        </button>
      </div>
    </div>
  )
}

export default Total;