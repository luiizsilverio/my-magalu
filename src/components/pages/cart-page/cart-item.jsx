import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";
import './cart-page.styles.scss';

const CartItem = (product) => {
  const { title, imageUrl, price, quantity } = product;

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt="produto" />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>R$ {price.toFixed(2)}</p>
      </div>
      <div className="quantity">
        <p>{`Quantidade: ${quantity}`}</p>
      </div>
      <div className="btn-container">
        <button className="btn-increase">
          <PlusCircleIcon width='20px' />
        </button>
        {
          quantity <= 1 ? (
            <button className="btn-trash">
              <TrashIcon width='20px' />
            </button>
          ) : (
            <button className="btn-decrease">
              <MinusCircleIcon width='20px' />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default CartItem;