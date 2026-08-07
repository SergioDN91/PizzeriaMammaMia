import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  const { token } = useUser();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
        
        <Route path="/cart" element={<Cart />} />
        
       
        <Route path="/pizza/:id" element={<Pizza />} />
        
        
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;