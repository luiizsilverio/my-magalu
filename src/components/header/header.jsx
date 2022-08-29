import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss';

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <FaShopify size={32} />
        &nbsp;
        <Link to='/'>MY-MAGALU</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>
            Início
          </Link>
        </li>
        <li>
          <Link to='/shop'>
            Loja
          </Link>
        </li>
      </ul>
      <CartIcon />
    </nav>
  )
}

export default Header;
