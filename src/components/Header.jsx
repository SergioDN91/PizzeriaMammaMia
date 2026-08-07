import headerBg from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <header 
      className="text-center text-white d-flex flex-column justify-content-center align-items-center" 
      style={{ 
        backgroundImage: `url(${headerBg})`, 
        height: "35vh", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay"
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-50 border-2 opacity-100" />
    </header>
  );
};

export default Header;