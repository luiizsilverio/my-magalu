import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from '../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container"
      onClick={() => navigate('/cart')}
    >
      <img src={shoppingBag} alt="sacola" />
      {
        itemCount > 0 && (
          <span className='cart-count'>{ itemCount }</span>
        )
      }
    </div>
  )
}

export default CartIcon;