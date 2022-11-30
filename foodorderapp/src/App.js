import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCart=(props)=>{
    setCartIsShown(true);
  }

  const hideCart=(props)=>{
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
    {cartIsShown && <Cart onClose={hideCart}/>}
      <Header onShow={showCart}></Header>
      <main>
      <Meals></Meals>
      </main>
      
    </React.Fragment>
  );
}

export default App;
