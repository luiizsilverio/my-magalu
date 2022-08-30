import { useContext } from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from '../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  console.log(itemCount)

  return (
    <div className="cart-container">
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