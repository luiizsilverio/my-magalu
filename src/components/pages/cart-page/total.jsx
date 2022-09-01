import { useNavigate } from 'react-router-dom';

const Total = ({ itemCount, total }) => {
  const navigate = useNavigate();

  return (
    <div className="total-container">
      <div className="total">
        <p>Total de Itens: &nbsp; <span>{itemCount}</span></p>
        <p>Valor Total: &nbsp; <span>R$ {total.toFixed(2)}</span></p>
      </div>
      <div className="checkout">
        <button className="button is-black"
          onClick={() => navigate('/checkout')}
        >COMPRAR
        </button>
        <button className="button btn-white-outline"
          onClick={() => {}}
        >LIMPAR
        </button>
      </div>
    </div>
  )
}

export default Total;