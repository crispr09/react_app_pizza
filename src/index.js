import React from "react";
import ReactDOM from "react-dom/client"
import './index.css'
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
  
function Awpp() {
    return (
    <div className="container">
        <h1>Hello from my project react!!</h1>
        <Header />
        <Menu />
        <Footer />
    </div>
    );
}
function Header() {
    return ( 
        <header className="header">
        <h1 style={{color:"red", fontSize:"48px", textTransform: "uppercase"}}>Fast Pizza Devivery co.</h1>
        </header>

    );
}
function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizza = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Pizzas</h2>
            {numPizza >0 ? (
            <ul className="pizzas">
                {pizzas.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />

                ))}
            </ul>
            ) : <p>We'are still working on our today's menu.Please visit in sometime</p>}
            
      </main>
    );
}

function Pizza(a) {
    // if(a.pizzaObj.soldOut) return null
    return (
    <li className={`pizza ${a.pizzaObj.soldOut ? "sold-out" : ""}`}>
        
        <img src={a.pizzaObj.photoName}></img>
        <div>
            <h3>{a.pizzaObj.name}</h3>
            <p>{a.pizzaObj.ingredients}</p>

            <span>{a.pizzaObj.soldOut ? "SOLD OUT" : a.pizzaObj.price}</span>
        </div>
    </li>
);
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 21;
    const closeHour = 22;
    const isOpen = hour>= openHour && hour <=closeHour;
    // if(!isOpen) 
    // return (
    // <p>We're are happy to welcome you between {openHour} and {closeHour} </p>
    // );
    return (
    <footer className="footer">
        <div className="order">
            {
                <p>We're currently open. Come visit us or order online </p>
            }
             <button className="btn"> Order</button>
        </div>
    </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Awpp />
    </React.StrictMode>
);