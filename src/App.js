import "./App.css";
import Home from "./pages/Home";
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Register from './pages/register';
import Qurish from './pages/Qurish';
import Cardlar from './pages/Cards';
import Boshqismpage from './pages/Boshqism';

function App() {
  return(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/card" element={<Cardlar />} />
      <Route path="/qurish" element={<Qurish />} />
      <Route path="/home" element={<Boshqismpage />} />
  </Routes>
  );
}

export default App;
