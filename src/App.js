import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Singer from './Component/Singer/Singer';






function App() {
  const [singers, setSinger] = useState([]);
  useEffect(() => {
    fetch('./sing.JSON')
      .then(res => res.json())
      .then(data => setSinger(data));
  }, [])

  const [cart, setCart] = useState([])

  const addtocard = (singer) => {
    if (!cart.includes(singer)) {
      const newCart = [...cart, singer];
      setCart(newCart);
    }


  }

  return (
    <div className="App">
      <Header />
      <div className="custom-body">
      <div className="singu">
        {
          singers.map(singer =>
            <Singer
              singer={singer}
              handleButton={addtocard}
            >

            </Singer>)

        }
      </div>
      <div className="custom-cart">
        <Cart
          cart={cart}
        ></Cart>
      </div>
      </div>
      

    </div>
  );
}

export default App;
