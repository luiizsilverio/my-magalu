import { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import FeaturedProduct from "../shared/featured-product";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products.filter((prod, i) => i < 4).map((prod) => (
    <FeaturedProduct {...prod} key={ prod.id } />
  ));

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Coleção Magaloo</h2>
      <div className="products">
        { productItems }
      </div>
    </div>
  )
}

export default FeaturedCollection;

/*
  .featured-collection está em App.scss
  .container é uma classe do bulma
*/
