import React from 'react';
import './App.css';
import "bootswatch/dist/materia/bootstrap.min.css";
import Languages from './components/Languages';
import InputHook from './components/InputHook';
import Counter from './components/useEffect/Counter';
import Listen from './components/useEffect/Listen';
import ShopContextProvider from './context/ShopContext';
import ShowProduct from './components/ShowProduct';


function App() {
  return (
    <div className="container mt-5  ">
      <Languages/>
      <Counter/>
      <Listen/>
      <br></br>
      <ShopContextProvider>
        <ShowProduct />
      </ShopContextProvider>
    </div>
  );
}

export default App;
