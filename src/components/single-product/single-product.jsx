import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import './single-product.styles.scss';

const SingleProduct = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));

    // se o produto não existir, redireciona para a página shop
    if (!product) {
      return navigate('/shop');
    }

    setProduct(product);
  }, [id, products, navigate])

  if (!product) {
    return (
      <Layout>
        <h3>Aguarde...</h3>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={product.imageUrl} alt="produto" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{product.title}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
          <div className="add-to-cart-btn">
            <button className="button is-white nomad-btn" id="btn-white-outline">
              ADICIONAR AO CARRINHO
            </button>
            <button className="button is-black nomad-btn" id="btn-white-outline">
              FECHAR O PEDIDO
            </button>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleProduct;