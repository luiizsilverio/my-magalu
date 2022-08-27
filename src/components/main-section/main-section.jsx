import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-image'>
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-description">
          <h2>Bolsa Magaloo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem alias enim earum omnis error at beatae porro hic laboriosam, quaerat quis obcaecati voluptas quisquam in eligendi harum optio fugit.</p>
          <button className='button is-black' id='shop-now'
            onClick={() => history.push('/product/1')}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainSection;