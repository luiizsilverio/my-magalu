import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found/not-found';
import './App.scss';
import Shop from './components/pages/shop/shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
