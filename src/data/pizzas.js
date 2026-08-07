import imgNapolitana from '../assets/img/napolitana.jpg';
import imgEspanola from '../assets/img/española.jpg';
import imgPepperoni from '../assets/img/pepperoni.jpg';
export const pizzas = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: imgNapolitana,
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda."
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    img: imgEspanola,
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal."
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    img: imgPepperoni,
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal."
  },
  {
    id: "P004",
    name: "cuatro estaciones",
    price: 9590,
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    img: imgNapolitana, 
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal."
  },
  {
    id: "P005",
    name: "bacon",
    price: 6450,
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    img: imgEspanola,
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal."
  },
  {
    id: "P006",
    name: "pollo picante",
    price: 8500,
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    img: imgPepperoni,
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal."
  }
];


export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: imgNapolitana,
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: imgEspanola,
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: imgPepperoni,
  },
];