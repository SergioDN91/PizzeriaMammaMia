import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;