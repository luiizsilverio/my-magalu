import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/cart-context';
import Layout from '../../shared/layout';

const Canceled = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  useEffect(() => clearCart, []);

  return (
    <Layout>
      <div className='checkout'>
        <h1>Falha no pagamento</h1>
        <p>Pagamento não efetuado</p>
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

export default Canceled;