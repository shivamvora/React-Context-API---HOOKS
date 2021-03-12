import React from 'react';
import './App.css';
import "bootswatch/dist/materia/bootstrap.min.css";
import Languages from './components/Languages';
import InputHook from './components/InputHook';
import Counter from './components/useEffect/Counter';


function App() {
  return (
    <div className="container mt-5  ">
      <Languages/>
      <Counter/>
    
    </div>
  );
}

export default App;
