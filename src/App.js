import MainNavbar from './components/MainNavbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
function App() {
  return (
    <div className="App">
  <MainNavbar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/cart" element={<Cart/>} />
  </Routes>
    </div>
  );
}

export default App;
