import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome To React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numberPizza = pizzas.length;
  console.log(numberPizza);
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numberPizza > 0 ? (
        <>
          <p>
            Authentic italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza pizzaObj={pizza} key={pizza.name} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu please come back later :)</p>
      )}

      {/* <Pizza
        name="Spinach Pizza"
        PizzaImage="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />
      <Pizza
        name="Fungi Pizza"
        PizzaImage="pizzas/funghi.jpg"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //   console.log(hour);

  const OpenHour = 8;
  const CloseHour = 18;
  const IsOpen = hour >= OpenHour && hour <= CloseHour;

  //   if (hour >= OpenHour && hour <= CloseHour) alert("We are currently Open");
  //   else alert("We are currently closed");

  // if (!IsOpen) {
  //   return <p className="footer">CLOSED</p>;
  // }
  return (
    <footer className="footer">
      {IsOpen ? (
        <Order CloseHour={CloseHour} />
      ) : (
        <p>
          We are happy to welcome you between {OpenHour}:00 and {CloseHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ CloseHour }) {
  return (
    <div className="order">
      <p>We are open until {CloseHour}:00pm. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
