import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import Home from './components/Home';
// import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';

import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Pizza />
      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}

export default App;