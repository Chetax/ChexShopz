import { Routes,Route } from 'react-router-dom';
import './App.css';
import MainNavbar from './components/MainNavbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
   <MainNavbar/>
  <Routes>
    <Route path="/" element={Home}/>
    <Route path="/cart" element={Cart}/>
  </Routes>
    </div>
  );
}

export default App;
