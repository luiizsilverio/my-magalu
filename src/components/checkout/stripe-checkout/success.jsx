import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/cart-context';
import Layout from '../../shared/layout';

const Success = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  useEffect(() => clearCart, []);

  return (
    <Layout>
      <div className='checkout'>
        <h1>Obrigado pelo pedido</h1>
        <p>
          Estamos processando seu pedido e logo enviaremos
          <br /> um e-mail de confirmação
        </p>
        <div>
          <button
            className='button is-black nomad-btn'
            onClick={() => navigate('/shop')}
          >Continuar Comprando
          </button>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Success;