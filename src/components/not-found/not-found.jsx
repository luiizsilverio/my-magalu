import Layout from "../shared/layout";
import { GrStatusWarning } from 'react-icons/gr';
import './not-found.styles.scss';

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <GrStatusWarning size={64} />
        <p>Página não encontrada</p>
      </div>
    </Layout>
  )
}

export default NotFound;
