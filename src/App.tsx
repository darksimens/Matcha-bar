import { Routes, Route } from 'react-router-dom';
import Main from './components/home';
import Catalog from './components/catalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
}
export default App;