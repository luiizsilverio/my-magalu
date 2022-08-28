import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
