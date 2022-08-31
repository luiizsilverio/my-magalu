import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';

import './featured-product.styles.scss';

const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, description } = props;
  const product = { id, title, imageUrl, price, description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="featured-product">
      <div className="featured-image"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h3>{ title }</h3>
        <p>R$ { price.toFixed(2) }</p>
        {
          isInCart(product, cartItems) ? (
            <button
              id="btn-white-outline"
              className="button is-white nomad-btn"
              onClick={() => increase(product)}
            >ADICIONAR MAIS
            </button>
          ) : (
            <button
              className="button is-black nomad-btn"
              onClick={() => addProduct(product)}
            >ADICIONAR
            </button>
          )
        }
      </div>
    </div>
  )
}

export default FeaturedProduct;