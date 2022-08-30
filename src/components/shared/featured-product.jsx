import { useNavigate } from 'react-router-dom';

import './featured-product.styles.scss';

const FeaturedProduct = (product) => {
  const { id, title, imageUrl, price } = product;
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
        <button className="button is-black nomad-btn">
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default FeaturedProduct;