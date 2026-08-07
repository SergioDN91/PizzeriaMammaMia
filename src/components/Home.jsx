import Header from './Header';
import CardPizza from './CardPizza';
import imgNapolitana from '../assets/img/napolitana.jpg';
import imgEspanola from '../assets/img/española.jpg';
import imgPepperoni from '../assets/img/pepperoni.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={imgNapolitana} 
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={imgEspanola}
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={imgPepperoni}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;